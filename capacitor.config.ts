import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.istanakadostore.app',
  appName: 'العديل والزين',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: true
}
};

export default config;