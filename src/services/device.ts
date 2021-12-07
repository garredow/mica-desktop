import { DeviceInfo } from '../models';

export function getDeviceInfo(): Promise<DeviceInfo> {
  return (window as any).electron.device.getInfo();
}
