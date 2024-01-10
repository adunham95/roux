import { legalText, navigation, version } from './links';

export default function SmallFooter({
  removeMargin = false,
}: {
  removeMargin?: boolean;
}) {
  return (
    <footer className={`bg-surface ${removeMargin ? '' : 'mt-2'}`}>
      <div className="mx-auto max-w-7xl px-4 py-4 md:py-6 md:flex md:items-center md:justify-between lg:px-6">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-surface-3 hover:text-brand"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-4 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-surface-3">
            &copy;{legalText} <span>{version}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
