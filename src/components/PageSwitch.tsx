interface PageSwitchProps {
  handleSwitch: () => void;
  isChecked: boolean;
}

const PageSwitch = ({ handleSwitch, isChecked }: PageSwitchProps) => {
  return (
    <div className="flex items-center justify-center p-2">
      <span
        className={`${
          isChecked && 'italic line-through opacity-50'
        } mr-3 text-sm font-medium text-gray-900 dark:text-gray-300`}
      >
        Mock initial data
      </span>
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" value="" className="peer sr-only" checked={isChecked} onChange={handleSwitch} />
        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
        <span
          className={`${
            !isChecked && 'italic line-through opacity-50'
          } ml-3 text-sm font-medium text-gray-900 dark:text-gray-300`}
        >
          Data based on your IP location
        </span>
      </label>
    </div>
  );
};
export default PageSwitch;
