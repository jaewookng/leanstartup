# GlowVision App Structure

## Root Directory

## Component Breakdown

### Auth Components
- `LoginForm`: Handles sample code input and validation
  - Integrated QR code scanning functionality
  - Toggleable camera view for code scanning
  - Error handling for invalid codes

### Dashboard Components
- `Header`: App header with GlowVision branding and user mode selection
- `KeyMetrics`: 
  - Displays main health score and hydration level
  - Features non-linear loading animations
  - Dynamic visual feedback
- `InDepthReportButton`: CTA for detailed report
- `SkinMetricsChart`: Doughnut chart for component distribution
- `SkinBarrierChart`: Bar chart for barrier health metrics
- `SkinComposition`: Shows detailed composition metrics
- `Recommendations`: Displays personalized recommendations
- `UserModeSlider`: 
  - Toggles between Consumer, Student, and Scientist modes
  - Adaptive sizing for all screen sizes
  - Dynamically measures and positions the selection indicator

### Shared Components
- `Button`: Reusable button component with variants
- `Card`: Container component for metrics and charts
- `Input`: Form input component
- `Loading`: Loading state component

## Data Flow
1. User enters sample code or scans QR code
2. API validates code and returns skin analysis data
3. Dashboard components render with animated loading effects
4. Charts update with real-time metrics
5. Content detail adapts based on selected user mode
6. Recommendations generated based on analysis

## State Management
- Use React Context for auth state
- Use React Context for user mode state
- Use React Query for data fetching
- Local state for UI interactions and animations

## Styling
- Tailwind CSS for utility-first styling
- Custom components for consistent design
- Mobile-first responsive design
- Dynamic measurements for adaptive UI elements

## API Routes
- `/api/auth`: Handle authentication
- `/api/skin-analysis`: Fetch and update skin data

## Type Definitions
- Skin metrics interfaces
- User data types
- API response types
- UserMode type definitions

## Utilities
- Chart configuration
- Data formatting
- Validation helpers
- Animation utilities
- Dynamic content rendering based on user mode

## Configuration
- Environment variables
- API endpoints
- Sample data for development
