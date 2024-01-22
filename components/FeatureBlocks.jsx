import {
  CardsIcon,
  MagicIcon,
  DoorIcon,
  ShuffleIcon,
  SignalIcon,
  TalkingIcon,
} from "../svg/FeatureIcons";

// Built with Vivid (https://vivid.lol) ⚡️

export const FeatureBlocks = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="relative z-20 gap-16 px-12 py-24 mx-auto text-center flex flex-col max-w-7xl">
        {/* Header */}
        <div className="gap-4 flex flex-col">
          <h2
            data-aos="zoom-y-out"
            className="font-bold leading-tight tracking-tighter text-4xl md:text-6xl text-gray-800 dark:text-gray-100"
          >
            Make{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-emereld to-neon-indigo">
              headless
            </span>{" "}
            a havit
          </h2>
          <p
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
          >
            You have the freedom to choose the technology that best suits your
            need.
          </p>
        </div>
        {/* Blocks */}
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {/* Block 1 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <ShuffleIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Decoupled Architecture
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              This separation allows for more flexibility and enables developers
              to use different technologies for the front end and back end
            </p>
          </div>
          {/* Block 2 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <SignalIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Content as a Service (CaaS)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              This allows content to be easily distributed across various
              platforms and devices, making it suitable for omnichannel
              experiences
            </p>
          </div>
          {/* Block 3 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <TalkingIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Flexibility and Scalability
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Scalability is improved as each component can be scaled
              independently based on demand.
            </p>
          </div>
          {/* Block 4 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <DoorIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              API-First Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Developers adopt an API-first approach, ensuring that APIs are
              designed and developed before the front end, allowing for a more
              efficient and collaborative workflow
            </p>
          </div>
          {/* Block 5 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <CardsIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Cross-Platform Compatibility
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Headless architecture supports a wide range of devices, making it
              suitable for delivering content across different channels
            </p>
          </div>
          {/* Block 6 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <MagicIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Improved Performance
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              By eliminating the need to render entire web pages on the server
              side, headless architectures often lead to improved performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
