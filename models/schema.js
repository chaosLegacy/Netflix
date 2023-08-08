export const schema = {
  models: {
    Category: {
      name: 'Category',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        title: {
          name: 'title',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        movies: {
          name: 'movies',
          isArray: true,
          type: {
            model: 'Movie',
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: ['category'],
          },
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Categories',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'private',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    Movie: {
      name: 'Movie',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        title: {
          name: 'title',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        poster: {
          name: 'poster',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        year: {
          name: 'year',
          isArray: false,
          type: 'Int',
          isRequired: true,
          attributes: [],
        },
        numberOfSeasons: {
          name: 'numberOfSeasons',
          isArray: false,
          type: 'Int',
          isRequired: true,
          attributes: [],
        },
        plot: {
          name: 'plot',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        cast: {
          name: 'cast',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        creator: {
          name: 'creator',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        categoryID: {
          name: 'categoryID',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        category: {
          name: 'category',
          isArray: false,
          type: {
            model: 'Category',
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetNames: ['categoryID'],
          },
        },
        seasons: {
          name: 'seasons',
          isArray: true,
          type: {
            model: 'Season',
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: ['movie'],
          },
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Movies',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'key',
          properties: {
            name: 'byCategory',
            fields: ['categoryID'],
          },
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'private',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    Season: {
      name: 'Season',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        name: {
          name: 'name',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        movieID: {
          name: 'movieID',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        movie: {
          name: 'movie',
          isArray: false,
          type: {
            model: 'Movie',
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetNames: ['movieID'],
          },
        },
        episodes: {
          name: 'episodes',
          isArray: true,
          type: {
            model: 'Episode',
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: ['season'],
          },
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Seasons',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'key',
          properties: {
            name: 'byMovie',
            fields: ['movieID'],
          },
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'private',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    Episode: {
      name: 'Episode',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        title: {
          name: 'title',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        poster: {
          name: 'poster',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        duration: {
          name: 'duration',
          isArray: false,
          type: 'Int',
          isRequired: false,
          attributes: [],
        },
        plot: {
          name: 'plot',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        video: {
          name: 'video',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        seasonID: {
          name: 'seasonID',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        season: {
          name: 'season',
          isArray: false,
          type: {
            model: 'Season',
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetNames: ['seasonID'],
          },
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Episodes',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'key',
          properties: {
            name: 'bySeason',
            fields: ['seasonID'],
          },
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'private',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  codegenVersion: '3.4.4',
  version: '0812b6cd327f6b1804669468f575d1f6',
};
