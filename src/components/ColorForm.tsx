import { useAppContext } from "../hooks/AppContext";

function ColorForm() {
  const { color, handleChange, handleSubmit } = useAppContext();
  return (
    <div className="p-6">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-end justify-center sm:justify-start"
      >
        <label
          htmlFor="color"
          className="flex flex-col items-center text-center text-xl sm:flex-row sm:text-start sm:text-2xl"
        >
          Color Generator
          <input
            type="text"
            name="color"
            id="color"
            placeholder="#f15025"
            value={color}
            onChange={(e) => handleChange(e)}
            className="sm:text-x mt-1 rounded border border-gray-200 p-2 text-lg sm:ml-1"
          />
        </label>
        <button
          type="submit"
          className="h-[46px] rounded bg-blue-600 px-2 text-lg text-white sm:text-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ColorForm;
