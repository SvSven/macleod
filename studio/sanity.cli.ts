import { defineCliConfig } from 'sanity/cli'
import { dataset, projectID } from './src/environment'

export default defineCliConfig({
  api: {
    projectId: projectID,
    dataset: dataset,
  },
})
