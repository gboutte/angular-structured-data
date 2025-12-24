# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 1.0.1 - 2025-12-24
### Added
- installed package `@gboutte/schema.org-classes`

### Changed
- Renamed `StructuredDataService` to `AngularStructuredDataService`
- Updated `AngularStructuredDataService` and `StructuredDataComponent` to use `StructuredDataService` and all Schema classes from `@gboutte/schema.org-classes`
- Updated lib peer dependency to accept Angular versions 16 to 21
- Updated Angular doc dependencies to version 20
- Applied Angular migrations (signals, standalone, control flow and inject properties)

### Removed
- `StructuredDataService`
- `StructuredDataComponent`
- `FaqSchema`
- `ArticleSchema`
- `WebsiteSchema`
- `BreadcrumbSchema`
- `EventSchema`

## 0.0.6 - 2024-04-11

## 0.0.5 - 2024-04-09
### Fixed
- StructuredDataComponent

## 0.0.4 - 2024-03-21

## 0.0.3 - 2024-03-21
### Added
- `BreadcrumbSchema`
- `EventSchema`

## 0.0.2 - 2024-03-16
### Added
- `StructuredDataService`
- `StructuredDataComponent`
- `FaqSchema`
- `ArticleSchema`
- `WebsiteSchema`
