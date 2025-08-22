export default function FormField({
  id,
  label,
  error,
  children
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-500 dark:text-gray-300 text-left"
      >
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}
