function getSortQuery(condition) {
  const sortEnum = Object.freeze({
    ID_DESC: 0,
    NAME_ASC: 1,
    NAME_DESC: 2,
    CATEGORY_ASC: 3,
    LOCATION_ASC: 4,
    RATING_ASC: 5,
    RATING_DESC: 6,
  })
  const result = {}

  switch (condition) {
    case sortEnum.ID_DESC:
      result._id = 'desc'
      return result
    case sortEnum.NAME_ASC:
      result.name = 'asc'
      return result
    case sortEnum.NAME_DESC:
      result.name = 'desc'
      return result
    case sortEnum.CATEGORY_ASC:
      result.category = 'asc'
      return result
    case sortEnum.LOCATION_ASC:
      result.location = 'asc'
      return result
    case sortEnum.RATING_ASC:
      result.rating = 'asc'
      return result
    case sortEnum.RATING_DESC:
      result.rating = 'desc'
      return result
  }
}

module.exports = getSortQuery
