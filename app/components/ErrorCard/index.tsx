export interface IErrorCard {
  message: string;
}

export const ErrorCard = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-red-500 p-4 text-white">
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
};
