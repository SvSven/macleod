import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { defineCliConfig } from 'sanity/cli'
import { dataset, projectID } from './src/environment'

export default defineConfig({
  name: 'default',
  title: 'macleod',

  projectId: projectID,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
