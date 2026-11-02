PRD: Lumora Wrapper Component

1. Objective
   To create a foundational, reusable React component, LumoraWrapper, that provides a consistent UI layout (header, sidebar, main content) for all authenticated sections of the application. This component will also encapsulate a critical piece of session management logic: proactively refreshing the user's authentication token to prevent session expiry during active use.

2. Background & Problem Statement
   Currently, our application lacks a standardized page structure, leading to inconsistent layouts and duplicated code. More critically, our session management is reactive; users can be abruptly logged out when their authentication token expires, leading to a frustrating user experience and potential loss of unsaved work.
   This PRD outlines a new wrapper component that solves both problems. It will provide a single, reliable structure for our authenticated views and introduce a proactive token refresh mechanism that ensures a seamless, uninterrupted user session.

3. User Stories
   As a user, I want to see a consistent header and sidebar on every page after I log in, so I can easily navigate the application and access my profile.
   As a user, I want my session to remain active as long as I am using the application, so I don't get unexpectedly logged out while performing a task.
   As a developer, I want to wrap my page-level components in a single layout component to handle authentication state and UI structure, so I don't have to rebuild the layout and session logic for every new page.

4. Functional Requirements
   4.1. Component Signature & Props
   The component, named LumoraWrapper, will accept children as a prop to render the main page content.
   TypeScript

interface LumoraWrapperProps {
children: React.ReactNode;
}

4.2. UI Layout Structure
The component must render the following three distinct layout sections:
Header: A top-level horizontal bar.
Sidebar: A vertical navigation bar on the left.
Main Content Area: A flexible content area to the right of the sidebar that will render the children prop.
4.3. Proactive Token Refresh Logic
The core logic for session management must be implemented within this component, ideally in a useEffect hook that runs once on component mount.
Read Cookie: On component load, the logic must access the browser's cookies and read the value of the tokenExpiry cookie.
Calculate Expiry Delta: It must calculate the time remaining until token expiration.
currentTime = new Date()
expiryTime = new Date(tokenExpiryFromCookie)
timeUntilExpiry = expiryTime.getTime() - currentTime.getTime()
Conditional API Call:
An API call to the token refresh endpoint (e.g., /api/auth/refresh) must only be triggered IF timeUntilExpiry is less than or equal to 10 minutes (600,000 milliseconds) AND greater than 0.
If timeUntilExpiry is greater than 10 minutes, no action should be taken.
Update Session: Upon a successful response from the refresh token API, the logic must update the new authentication token and the new tokenExpiry value in the browser's cookies.
Error Handling: If the refresh API call fails, the user should be logged out and redirected to the login page.

5. Tech Stack & Implementation Details
   Framework: React will be used for building the component's structure and handling its lifecycle.
   Language: TypeScript is required for type safety, ensuring robust props and state management.
   UI Component Library: Tailwind CSS v4 and Radix primitives (shadcn/ui-style components, as in Nexa's src/components/ui) build the layout components, styled from Nexa's design tokens and shipped as the package's own stylesheet (`@lumora/lumora-wrapper-component/styles.css`). This ensures consistency with our design system. (MUI Material UI until 2.0.0.)
   Styling (Optional): While Material UI provides default styling, developers have the option to use custom CSS or styled-components for more customized styling solutions or for creating new, themed sub-components within the wrapper.

6. Non-Functional Requirements
   Performance: The token check logic must be highly efficient and non-blocking to avoid any perceptible delay in page rendering.
   Security: The component must read from a cookie configured with HttpOnly and Secure flags where possible. All communication with the refresh endpoint must be over HTTPS.
   Reusability: The component should be self-contained and easily applicable to any new or existing page that requires an authenticated layout.

7. Out of Scope
   UI Implementation of Header/Sidebar: This task is focused on the layout structure and token logic. The actual design, branding, and navigation links within the header and sidebar will be handled in separate tickets.
   State Management Integration (Redux/Zustand): For this initial implementation, the component can manage its state internally.
   API Endpoint Creation: This PRD assumes the refresh token API endpoint (/api/auth/refresh) already exists and is functional.

8. Success Metrics
   The LumoraWrapper component is used on all authenticated pages.
   Manual and automated testing confirms that the refresh token API is called only when the tokenExpiry is within the 10-minute window.
   A significant reduction in user-reported session timeout issues.
