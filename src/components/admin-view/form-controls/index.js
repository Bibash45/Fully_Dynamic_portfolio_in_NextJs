"use client";

export default function FormControls({ formData, setFormData, controls }) {
  return controls.map(({ name, placeholder, type, label }) => (
    <div className="mb-4" key={name}>
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={(e) => {
          setFormData({
            ...formData,
            [name]: e.target.value,
          });
        }}
      />
    </div>
  ));
}
