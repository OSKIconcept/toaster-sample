"use client";

//toasts
import {
  error,
  errorRed,
  errorWithCancel,
  errorWithoutCancel,
  errorWthoutTryagain,
  sentBlack,
  sentGreen,
  sentWhite,
  warn,
  warnBlack,
  warning,
  warningBlack,
  warningWhite,
  warningWithoutCancel,
  warningYellow,
} from "@/components/Toast";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex flex-col gap-8 mx-auto mt-[50px]">
        <div>
          <button
            className="  p-3 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              warn("Explain the situation as clearly and concisely as possible")
            }
          >
            Render warn
          </button>
        </div>

        <div>
          <button
            className="  p-3 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              warnBlack(
                "Explain the situation as clearly and concisely as possible"
              )
            }
          >
            Render warn Black
          </button>
        </div>

        <div>
          <button
            className="  p-3 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              warningWhite(
                "Explain the situation as clearly and concisely as possible"
              )
            }
          >
            Render warn White
          </button>
        </div>

        <div>
          {" "}
          <button
            className="  p-3 rounded-lg bg-red-700 text-white ml-5"
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
          {" "}
          <button
            className="  p-3 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              warningYellow(
                "Explain the situation as clearly and concisely as possible",
                () => {
                  alert("done");
                }
              )
            }
          >
            Render warning Yellow
          </button>
        </div>

        <div>
          {" "}
          <button
            className="  p-3 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              warningBlack(
                "Explain the situation as clearly and concisely as possible",
                () => {
                  alert("done");
                }
              )
            }
          >
            Render warning Black
          </button>
        </div>

        <div>
          <button
            className=" p-3 rounded-lg bg-red-700 text-white ml-5"
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
            className=" p-3 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              errorWthoutTryagain(
                "Explain the situation as clearly and concisely as possible",
                () => {
                  alert("done");
                }
              )
            }
          >
            Render error without Try again
          </button>
        </div>

        <div>
          <button
            className=" p-3 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              errorWithCancel(
                "Explain the situation as clearly and concisely as possible",
                () => {
                  alert("done");
                }
              )
            }
          >
            Render error with cancel
          </button>
        </div>

        <div>
          <button
            className="  p-3 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              sentGreen(
                "Explain the situation as clearly and concisely as possible"
              )
            }
          >
            Render sent
          </button>
        </div>

        <div>
          <button
            className="  p-3 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              sentBlack(
                "Explain the situation as clearly and concisely as possible"
              )
            }
          >
            Render sent Black
          </button>
        </div>

        <div>
          <button
            className="  p-3 rounded-lg bg-red-700 text-white ml-5"
            onClick={() =>
              sentWhite(
                "Explain the situation as clearly and concisely as possible"
              )
            }
          >
            Render sent White
          </button>
        </div>
      </div>
    </main>
  );
}
