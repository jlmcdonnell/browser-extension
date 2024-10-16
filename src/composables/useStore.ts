import { Ref } from 'vue';

import type { HistoryEntriesMap } from './useProxyHistory/HistoryEntries.types';
import { Country } from './useListProxies';
import type {
  ProxyDetails,
  ProxyInfoMap,
  ProxyInfo,
  ProxyDetailsMap,
} from '@/helpers/socksProxy.types';
import { Tab } from '@/helpers/browserExtension';

import useBrowserStorageLocal from '@/composables/useBrowserStorageLocal';

export type Store = {
  excludedHosts: Ref<string[]>;
  hostProxies: Ref<ProxyInfoMap>;
  hostProxiesDetails: Ref<ProxyDetailsMap>;
  globalProxy: Ref<ProxyInfo>;
  globalProxyDetails: Ref<ProxyDetails>;
  historyEntries: Ref<HistoryEntriesMap>;
  mullvadAccount: Ref<string>;
  proxiesList: Ref<Country[]>;
  randomProxyActive: Ref<boolean>;
  webRTCStatus: Ref<boolean>;
  optionsActiveTab: Ref<Tab>;
};

const useStore = (): Store => {
  const excludedHosts = useBrowserStorageLocal('excludedHosts', []);
  const globalProxy = useBrowserStorageLocal('globalProxy', {} as ProxyInfo);
  const globalProxyDetails = useBrowserStorageLocal('globalProxyDetails', {} as ProxyDetails);
  const hostProxies = useBrowserStorageLocal('hostProxies', {});
  const hostProxiesDetails = useBrowserStorageLocal('hostProxiesDetails', {});
  const historyEntries = useBrowserStorageLocal('historyEntries', {});
  const mullvadAccount = useBrowserStorageLocal('mullvadAccount', '');
  const proxiesList = useBrowserStorageLocal('proxiesList', [] as Country[]);
  const randomProxyActive = useBrowserStorageLocal('randomProxyActive', false);
  const webRTCStatus = useBrowserStorageLocal('webRTCStatus', true);
  const optionsActiveTab = useBrowserStorageLocal('optionsActiveTab', Tab.SETTINGS);
  return {
    excludedHosts,
    globalProxy,
    globalProxyDetails,
    hostProxies,
    hostProxiesDetails,
    historyEntries,
    mullvadAccount,
    optionsActiveTab,
    proxiesList,
    randomProxyActive,
    webRTCStatus,
  };
};

export default useStore;
