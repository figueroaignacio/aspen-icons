// Components
import { BackButton } from "@/components/BackButton";

export default function NotFound() {
  return (
    <section className="min-h-[90vh] flex justify-center items-center container">
      <div className="flex flex-col justify-center items-center gap-3 text-center border-[.0625rem] rounded-md p-16 border-dashed">
        <div>404</div>
        <div>
          <p className="opacity-75">Page not found</p>
        </div>
        <BackButton title="Go Back" />
      </div>
    </section>
  );
}
