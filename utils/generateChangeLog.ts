export function generateChangeLog(items: RecipeHistory[]) {
  console.group('Generate Changelog');
  console.log('items', items);
  const data: { [key: string]: string } = {};
  const logs = items.map(({ key, value }) => {
    const valueData = JSON.parse(value);
    data[key] = valueData;
    console.log(key);
    console.log(value);
    console.log(valueData.action);
    switch (valueData.action) {
      case 'ADD':
        return `Added ${valueData?.displayName || key} ${
          valueData?.display || ''
        }`;
      case 'DELETE':
        return `Deleted ${valueData?.displayName || key}`;
      default:
        return `Updated ${valueData?.displayName || key} ${
          valueData?.display || ''
        }`;
    }
  });

  console.log('data', data);
  console.log('logs', logs);
  console.groupEnd();
  return logs;
}
