
export const ButtonView = ((props: any) => {
  return (
    <div data-testid="button" className="w-fit cursor-pointer rounded bg-red-500 px-4 py-2 text-white hover:bg-red-300" onClick={props.clickEvent}>
      {props.text}
    </div>
  );
});
