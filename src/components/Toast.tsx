export type ToastType = 'success' | 'error' | 'info' | 'warning'

export interface ToastProps {
  message: string;
  type?: ToastType;
}

const typeStyles: Record<ToastType, string> = {
  success: 'bg-green-600',
  error: 'bg-red-600',
  info: 'bg-blue-600',
  warning: 'bg-yellow-500 text-black'
}

export default function Toast({ message, type='info' }: ToastProps) {
  
  return (
    <div
      className={`fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg ${typeStyles[type]}`}
    >
      {message}
    </div>
  );
}
