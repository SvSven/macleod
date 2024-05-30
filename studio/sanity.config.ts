import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { defineCliConfig } from 'sanity/cli'
import { dataset, projectID } from './src/environment'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['home, settings'])

export default defineConfig({
  name: 'default',
  title: 'macleod',

  projectId: projectID,
  dataset: dataset,

  plugins: [
    visionTool(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Home').id('home').child(S.document().schemaType('home').documentId('home')),
            S.documentTypeListItem('page').title('Pages'),
            S.divider(),
            S.listItem()
              .title('Settings')
              .id('settings')
              .child(S.document().schemaType('settings').documentId('settings')),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
