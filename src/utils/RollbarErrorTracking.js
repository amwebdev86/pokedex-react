import Rollbar from 'rollbar';

export const RollebarErrorTracking = (() => {
  const RollbarObj = new Rollbar({
    accessToken: '0ca3c966f8374de9bfd81f16b7644478',
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'production',
    },
  });

  const logErrorInfo = (info) => RollbarObj.info(info);
  const logErrorInRollbar = (error) => {
    throw new Error(error);
  };

  return { logErrorInfo, logErrorInRollbar };
})();

export default RollebarErrorTracking;
