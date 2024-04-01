import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.auditapp.app',
  appName: 'auditapp',
  webDir: 'build',
  bundledWebRuntime: false,
	server: {
		url: 'http://192.168.1.17:3000',
		cleartext: true
	}
};

export default config;
