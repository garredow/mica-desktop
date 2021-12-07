import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  device: {
    getInfo: () => ipcRenderer.invoke('device-info'),
  },
  browser: {
    openUrl: (url: string) => ipcRenderer.invoke('open-url', url),
    downloadUrl: (url: string) => ipcRenderer.invoke('download-url', url),
  },
});
