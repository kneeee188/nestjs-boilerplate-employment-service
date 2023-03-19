... ING ...

This is the basic boilerplate with Basic employment service like linkedin.

# Basic folder structure
```
- src
  - modules
    - dtos
      - create-employment.dto.ts
      - update-employment.dto.ts
      - ...
    - entities
      - employment.entity.ts
      - employment-related-thing.entity.ts
      - ...
    - interfaces
      - employment-entity.interface.ts
      - employment-repository.interface.ts
      - employment-service.interface.ts
      - employment-controller.interface.ts
      - employment-query-filter.interface.ts
      - ...
    - repositories
      - employment.repository.ts
      - employment-related-thing.repository.ts // depends on employment's data structure
    - employment.controller.ts
    - employment.service.ts
    - employment.module.ts
- test
  - employment
    - e2e
      - employment.e2e.spec.ts
    - unit
      - employment-data-factory.spec.ts
      - employment.repository.spec.ts
      - employment-related-thing.repositoryspec..ts
      - employment.controller.spec.ts
      - employment.service.spec.ts
```

## Dto
This layer have responsibilities on
1. Get the input data from the client.
2. Validate the input
3. Change input to Entity
- Key name change to entity can use.
- Type change to entity can use.
4. Change Entity to Dto
- Key name change to the same as the name entered as input.
- Set additional data / calculate datas which client needs.
  - e.g. If database only has deadlineDate column, but client needs closed data, the dto calculages the closed data with deadlineDate.

In this file structure, It has the dependency of entity on the Dto layer. It could be bad. So you can have additional layer "Data mappers"(entity to dto, dto to entity). but I prefer to place mapper on dto.

## Entities
Database schemas is here.

## Interfaces
All the types and interfaces is here.
I prefer having seperate interfaces for all layers(service, repository). Nest.js recommends using class injection, but I make interfaces seperately and use "useClass" like below.

nest.js recommendation.
```ts
@Module({
  imports: [],
  controllers: [EmploymentController],
  providers: [EmploymentService],
})
```

my personal perference
```ts
@Module({
  imports: [],
  controllers: [EmploymentController],
  providers: [{
    provide: IEmploymentService,  // I perfer this.
    useClass: EmploymentService
  }],
})
```

## Repositories (DAO)
This layer has responsibility on database acceess

default nest.js doesn't have repository, but I think it is better seperating database queries from service layer. and It is easier to test.

# Initial setting check List
- ~~lint~~
- ~~prettier~~
- ~~husky~~
- ~~health checker~~
- ~~config~~
- error handler
- jest setting - coverage setting
- logger
- validation
- custom error
- database, orm
- inmemory
- file upload

# Basic features
- Pagination boilerplate for typeorm.
- File upload with S3
- Boilerplate of Dto usage
- Employment service
  - Company uploads employment
  - Company, Employee checks employments
  - Company checkes applyments
  - Employee apply employments
  - Employee got the result of applyment from Company