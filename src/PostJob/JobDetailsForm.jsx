"use client";

import Input from "@/components/input";
import Select from "@/components/select";

export default function JobDetailsForm({ data, onUpdate }) {
  return (
    <div className="space-y-6">
      <Input type="text" placeholder="Job Title" label="Job Title" />

      <Select
        className="space-y-2"
        label="Category"
        options={[{ value: "Group Leader", label: "Group Leader" }]}
      />

      <Select
        className="space-y-2"
        label="          Job Type
        "
        options={[{ value: "Full Time", label: "Full Time" }]}
      />

      <div>
        <label className="block text-[18px] font-semibold text-black-dark">
          Job Description
        </label>
        <textarea
          value={data.description}
          onChange={(e) => onUpdate({ description: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#9CD323] focus:border-[#9CD323]"
          placeholder="Enter job description..."
        />
      </div>

      <div>
        <label className="block text-[18px] font-semibold text-black-dark">
          Responsibilities
        </label>
        <textarea
          value={data.responsibilities}
          onChange={(e) => onUpdate({ responsibilities: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#9CD323] focus:border-[#9CD323]"
          placeholder="Enter responsibilities..."
        />
      </div>

      <div>
        <label className="block text-[18px] font-semibold text-black-dark">
          Qualifications
        </label>
        <textarea
          value={data.qualifications}
          onChange={(e) => onUpdate({ qualifications: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#9CD323] focus:border-[#9CD323]"
          placeholder="Enter qualifications..."
        />
      </div>

      <div>
        <label className="block text-[18px] font-semibold text-black-dark">
          Benefits
        </label>
        <div className=" flex justify-center flex-wrap w-full">
          {[
            "Supportive Work Enviornment",
            "Paid Time Off",
            "Transportation",
            "Birthday Celebration",
            "Flexable Work Hours",
            "Rewards",
          ].map((benefit) => (
            <div
              key={benefit}
              className="h-[53px] border-border border-[1px]  flex gap-6 items-center rounded-full bg-white px-4 "
            >
              <p className="text-[16px] text-black-medium"> {benefit}</p>
              <input
                type="checkbox"
                className="peer relative appearance-none shrink-0 w-6 h-6 border-2 border-border rounded-md mt-1 bg-white
    focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-border
    checked:bg-theme2-dark checked:border-0
    disabled:border-steel-400 disabled:bg-steel-400
    after:content-['✔'] after:absolute after:left-[6px] after:top-[6px] after:text-white after:opacity-0 
    checked:after:opacity-100 checked:after:left-[5px] checked:after:top-[1px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
