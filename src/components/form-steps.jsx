import Button from "./button";

export default function FormStep({
  title,
  heading,
  description,
  children,
  onNext,
  onSkip,
}) {
  return (
    <div className="w-full mb-8 ">
      <h2 className="font-bold font-sour text-[36px]">{heading}</h2>
      <div className="">
        {description && (
          <p className="text-black-medium py-6 text-[16px]">{description}</p>
        )}
        <h2 className="font-bold font-sour py-2 text-[28px]">{title}</h2>
      </div>

      <div className="">{children}</div>

      <div className=" flex flex-col mt-8 space-y-3">
        <Button fullWidth onClick={onNext}>
          Next
        </Button>
        <Button
          onClick={onSkip}
          fullWidth
          variant="outline"
          className="text-[20px] font-semibold"
        >
          Skip
        </Button>
      </div>
    </div>
  );
}
