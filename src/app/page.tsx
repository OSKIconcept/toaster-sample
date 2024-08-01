"use client";

//toasts
import {
  error,
  errorRed,
  errorWithCancel,
  errorWithoutCancel,
  errorWthoutTryagain,
  sentGreen,
  sentWhite,
  warn,
  warnBlack,
  warning,
  warningWhite,
  warningWithoutCancel,
  warningYellow,
} from "@/components/Toast";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-10">
        <div>
          <button
            className="absolute top-[400px] p-4 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              warn("Explain the situation as clearly and concisely as possible")
            }
          >
            Render warn
          </button>
        </div>

        <div>
          {" "}
          <button
            className="absolute top-[400px] p-4 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              warning(
                "Explain the situation as clearly and concisely as possible",
                () => {
                  alert("done");
                }
              )
            }
          >
            Render warning
          </button>
        </div>

        <div>
          <button
            className="absolute top-[400px] p-4 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              error(
                "Explain the situation as clearly and concisely as possible",
                () => {
                  alert("done");
                }
              )
            }
          >
            Render error
          </button>
        </div>
        <div>
          <button
            className="absolute top-[400px] p-4 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              sentGreen(
                "Explain the situation as clearly and concisely as possible"
              )
            }
          >
            Render sent
          </button>
        </div>
      </div>
    </main>
  );
}
