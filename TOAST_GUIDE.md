# Toast Notification System

## Usage

The toast system provides a consistent way to show notifications throughout the site.

### Import the hook

```javascript
import { useToast } from '../contexts/ToastContext';
```

### Use in your component

```javascript
function MyComponent() {
  const toast = useToast();

  const handleAction = () => {
    // Show different types of toasts
    toast.success('Operation successful!');
    toast.error('Something went wrong!');
    toast.warning('Please be careful!');
    toast.info('Here is some information');
    
    // Custom duration (default is 3000ms)
    toast.success('Quick message', 1000);
    toast.info('Long message', 5000);
    
    // Persistent toast (won't auto-dismiss)
    toast.warning('Click to dismiss', 0);
  };
  
  return <button onClick={handleAction}>Show Toast</button>;
}
```

## Features

- **Multiple types**: success, error, warning, info
- **Auto-dismiss**: Configurable duration (default 3 seconds)
- **Click to dismiss**: Click anywhere on the toast
- **Multiple toasts**: Stack multiple notifications
- **Animated**: Smooth slide-in animation
- **Responsive**: Works on mobile and desktop
- **Accessible**: Proper ARIA labels and keyboard support

## Current Usage

1. **Blog Share**: Copy link shows success toast
2. **UnderConstruction**: Keeps existing banner (not a toast, intentional)

## Styling

Toast colors are defined in `Toast.css`:
- Success: Green (#10b981)
- Error: Red (#ef4444)
- Warning: Orange (#f59e0b)
- Info: Blue (#3b82f6)

Toasts appear in the top-right corner (top-left on mobile).
