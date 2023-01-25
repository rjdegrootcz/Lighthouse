module.exports = {
  ci: {
    collect: {
      url: [
        'https://www.cz.nl'
      ],
      numberOfRuns: 3, // Set low to speed up the test runs. Default is 3.
      headful: true, // Show the browser which is helpful when checking the config
      settings: {
        disableStorageReset: true, // Don't clear localStorage / IndexedDB / etc before loading the page
        preset: 'desktop'
      }
    },
    upload: {
      target: 'lhci',
	  serverBaseUrl: 'http://wa-lighthouse-01.azurewebsites.net',  
	  token: '118fd144-09ca-4dab-b6d3-e127b28851e4' // The Lighthouse CI server build token for the project 
    }
  }
};
