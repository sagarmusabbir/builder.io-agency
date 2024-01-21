import Image from "next/image";

// Built with Vivid (https://vivid.lol) ⚡️

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="items-center justify-between px-10 py-4 mx-auto sm:px-6 flex flex-row max-w-7xl">
        <div className="items-center gap-4 flex flex-row">
          <Image
            src="/images/brackets-64.png"
            alt="Vivid Logo"
            height="40"
            width="40"
          />
          <div className="text-sm text-gray-600 dark:text-gray-400">
            &copy; Third Bracket, Inc. 2024
          </div>
        </div>
        <a
          href="https://join.slack.com/t/thirdbracket/shared_invite/zt-2b0nmfpcj-~kImXdgzQyyazvt83t5oqw"
          aria-label="Join Slack"
          className="text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5"
        >
          Join our Slack!
        </a>
      </div>
    </footer>
  );
};
