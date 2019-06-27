import { AsyncStorage } from 'react-native';
import { formatCalendarResults, CALENDER_STORAGE_KEY } from './_calendar';

export function fetchCalendarResults() {
  return AsyncStorage.getItem(CALENDER_STORAGE_KEY).then(formatCalendarResults);
}

export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem(
    CALENDER_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
}

export function removeEntry(key) {
  return AsyncStorage.getItem(CALENDER_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(CALENDER_STORAGE_KEY, JSON.stringify(data));
  });
}
