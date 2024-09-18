export function ModalSizes() {
  return (
    <>
      <div className="mb-3 flex gap-3">
        <button 
          data-dialog-target="modal-xs"
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
          Open Modal XS
        </button>
        <div
          data-dialog-backdrop="modal-xs"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="modal-xs"
            className="relative m-4 p-4 w-1/4 rounded-lg bg-white shadow-sm"
          >
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
              Its a simple Modal
            </div>
            <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </div>
            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              <button data-dialog-close="true" className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Cancel
              </button>
              <button data-dialog-close="true" className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                Confirm
              </button>
            </div>
          </div>
        </div>
        
        <button 
          data-dialog-target="modal-sm"
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
          Open Modal SM
        </button>
        <div
          data-dialog-backdrop="modal-sm"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="modal-sm"
            className="relative m-4 p-4 w-1/3 rounded-lg bg-white shadow-sm"
          >
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
              Its a simple Modal
            </div>
            <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </div>
            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              <button data-dialog-close="true" className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Cancel
              </button>
              <button data-dialog-close="true" className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                Confirm
              </button>
            </div>
          </div>
        </div>
        
        <button 
          data-dialog-target="modal-md"
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
          Open Modal MD
        </button>
        <div
          data-dialog-backdrop="modal-md"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="modal-md"
            className="relative m-4 p-4 w-2/5 rounded-lg bg-white shadow-sm"
          >
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
              Its a simple Modal
            </div>
            <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </div>
            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              <button data-dialog-close="true" className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Cancel
              </button>
              <button data-dialog-close="true" className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 flex gap-3">
        <button 
          data-dialog-target="modal-lg"
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
          Open Modal LG
        </button>
        <div
          data-dialog-backdrop="modal-lg"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="modal-lg"
            className="relative m-4 p-4 w-3/5 rounded-lg bg-white shadow-sm"
          >
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
              Its a simple Modal
            </div>
            <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </div>
            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              <button data-dialog-close="true" className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Cancel
              </button>
              <button data-dialog-close="true" className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                Confirm
              </button>
            </div>
          </div>
        </div>

        <button 
          data-dialog-target="modal-xl"
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
          Open Modal XL
        </button>
        <div
          data-dialog-backdrop="modal-xl"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="modal-xl"
            className="relative m-4 p-4 w-3/4 rounded-lg bg-white shadow-sm"
          >
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
              Its a simple Modal
            </div>
            <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </div>
            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              <button data-dialog-close="true" className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Cancel
              </button>
              <button data-dialog-close="true" className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                Confirm
              </button>
            </div>
          </div>
        </div>

        <button 
          data-dialog-target="modal-xxl"
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
          Open Modal XXL
        </button>
        <div
          data-dialog-backdrop="modal-xxl"
          data-dialog-backdrop-close="true"
          className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="modal-xxl"
            className="relative w-screen h-screen bg-white shadow-sm"
          >
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
              Its a simple Modal
            </div>
            <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </div>
            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              <button data-dialog-close="true" className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Cancel
              </button>
              <button data-dialog-close="true" className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}