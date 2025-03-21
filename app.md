# Next.js Mobile App Structure

## Root Directory

## Component Breakdown

### Auth Components
- `LoginForm`: Handles sample code input and validation
- `QRScanner`: Manages QR code scanning functionality

### Dashboard Components
- `Header`: App header with logout functionality
- `KeyMetrics`: Displays main health score and hydration level
- `InDepthReportButton`: CTA for detailed report
- `SkinMetricsChart`: Doughnut chart for component distribution
- `SkinBarrierChart`: Bar chart for barrier health metrics
- `SkinComposition`: Shows detailed composition metrics
- `Recommendations`: Displays personalized recommendations

### Shared Components
- `Button`: Reusable button component with variants
- `Card`: Container component for metrics and charts
- `Input`: Form input component
- `Loading`: Loading state component

## Data Flow
1. User enters sample code
2. API validates code and returns skin analysis data
3. Dashboard components render with data
4. Charts update with real-time metrics
5. Recommendations generated based on analysis

## State Management
- Use React Context for auth state
- Use React Query for data fetching
- Local state for UI interactions

## Styling
- Tailwind CSS for utility-first styling
- Custom components for consistent design
- Mobile-first responsive design

## API Routes
- `/api/auth`: Handle authentication
- `/api/skin-analysis`: Fetch and update skin data

## Type Definitions
- Skin metrics interfaces
- User data types
- API response types

## Utilities
- Chart configuration
- Data formatting
- Validation helpers

## Configuration
- Environment variables
- API endpoints
- Sample data for development
