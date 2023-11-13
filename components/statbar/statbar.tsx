interface IProps {
  stats: { id: string; name: string; stat: string }[];
}

export function StatBar(props: IProps) {
  const { stats } = props;
  return (
    <dl className="mt-5 grid grid-cols-1 divide-y divide-surface-4 overflow-hidden  md:grid-cols-3 md:divide-x md:divide-y-0">
      {stats.map((item) => (
        <div key={item.id} className="px-4">
          <dt className="text-base font-normal text-surface-2">{item.name}</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div className="flex items-baseline text-2xl font-semibold text-brand">
              {item.stat}
            </div>
          </dd>
        </div>
      ))}
    </dl>
  );
}
