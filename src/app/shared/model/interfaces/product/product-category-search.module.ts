// declare module ProductCategorySearchDTOModule {

// declare module namespace {


//     export interface FreeTextSearch {
//         type: string;
//     }

//     export interface CategoryCode {
//         type: string;
//     }

//     export interface KeywordRedirectUrl {
//         type: string;
//     }

//     export interface SpellingSuggestion {
//         $ref: string;
//     }

//     export interface Items {
//         $ref: string;
//     }

//     export interface Products {
//         type: string;
//         items: Items;
//     }

//     export interface Items2 {
//         $ref: string;
//     }

//     export interface Sorts {
//         type: string;
//         items: Items2;
//     }

//     export interface Pagination {
//         $ref: string;
//     }

//     export interface CurrentQuery {
//         $ref: string;
//     }

//     export interface Items3 {
//         $ref: string;
//     }

//     export interface Breadcrumbs {
//         type: string;
//         items: Items3;
//     }

//     export interface Items4 {
//         $ref: string;
//     }

//     export interface Facets {
//         type: string;
//         items: Items4;
//     }

//     export interface Properties {
//         serialVersionUID: SerialVersionUID;
//         freeTextSearch: FreeTextSearch;
//         categoryCode: CategoryCode;
//         keywordRedirectUrl: KeywordRedirectUrl;
//         spellingSuggestion: SpellingSuggestion;
//         products: Products;
//         sorts: Sorts;
//         pagination: Pagination;
//         currentQuery: CurrentQuery;
//         breadcrumbs: Breadcrumbs;
//         facets: Facets;
//     }

//     export interface SerialVersionUID2 {
//         description: string;
//         type: string;
//     }

//     export interface Suggestion {
//         type: string;
//     }

//     export interface Query {
//         type: string;
//     }

//     export interface Properties2 {
//         serialVersionUID: SerialVersionUID2;
//         suggestion: Suggestion;
//         query: Query;
//     }

//     export interface SpellingSuggestionWsDTO {
//         properties: Properties2;
//     }

//     export interface SerialVersionUID3 {
//         description: string;
//         type: string;
//     }

//     export interface Code {
//         type: string;
//     }

//     export interface Name {
//         type: string;
//     }

//     export interface Url {
//         type: string;
//     }

//     export interface Description {
//         type: string;
//     }

//     export interface Purchasable {
//         type: string;
//     }

//     export interface Stock {
//         $ref: string;
//     }

//     export interface Items5 {
//         $ref: string;
//     }

//     export interface FutureStocks {
//         type: string;
//         items: Items5;
//     }

//     export interface AvailableForPickup {
//         type: string;
//     }

//     export interface AverageRating {
//         type: string;
//     }

//     export interface NumberOfReviews {
//         type: string;
//     }

//     export interface Summary {
//         type: string;
//     }

//     export interface Manufacturer {
//         type: string;
//     }

//     export interface VariantType {
//         type: string;
//     }

//     export interface Price {
//         $ref: string;
//     }

//     export interface BaseProduct {
//         type: string;
//     }

//     export interface Items6 {
//         $ref: string;
//     }

//     export interface Images {
//         type: string;
//         items: Items6;
//     }

//     export interface Items7 {
//         $ref: string;
//     }

//     export interface Categories {
//         type: string;
//         items: Items7;
//     }

//     export interface Items8 {
//         $ref: string;
//     }

//     export interface Reviews {
//         type: string;
//         items: Items8;
//     }

//     export interface Items9 {
//         $ref: string;
//     }

//     export interface Classifications {
//         type: string;
//         items: Items9;
//     }

//     export interface Items10 {
//         $ref: string;
//     }

//     export interface PotentialPromotions {
//         type: string;
//         items: Items10;
//     }

//     export interface Items11 {
//         $ref: string;
//     }

//     export interface VariantOptions {
//         type: string;
//         items: Items11;
//     }

//     export interface Items12 {
//         $ref: string;
//     }

//     export interface BaseOptions {
//         type: string;
//         items: Items12;
//     }

//     export interface VolumePricesFlag {
//         type: string;
//     }

//     export interface Items13 {
//         $ref: string;
//     }

//     export interface VolumePrices {
//         type: string;
//         items: Items13;
//     }

//     export interface Items14 {
//         $ref: string;
//     }

//     export interface ProductReferences {
//         type: string;
//         items: Items14;
//     }

//     export interface Items15 {
//         $ref: string;
//     }

//     export interface VariantMatrix {
//         type: string;
//         items: Items15;
//     }

//     export interface PriceRange {
//         $ref: string;
//     }

//     export interface Multidimensional {
//         type: string;
//     }

//     export interface Properties3 {
//         serialVersionUID: SerialVersionUID3;
//         code: Code;
//         name: Name;
//         url: Url;
//         description: Description;
//         purchasable: Purchasable;
//         stock: Stock;
//         futureStocks: FutureStocks;
//         availableForPickup: AvailableForPickup;
//         averageRating: AverageRating;
//         numberOfReviews: NumberOfReviews;
//         summary: Summary;
//         manufacturer: Manufacturer;
//         variantType: VariantType;
//         price: Price;
//         baseProduct: BaseProduct;
//         images: Images;
//         categories: Categories;
//         reviews: Reviews;
//         classifications: Classifications;
//         potentialPromotions: PotentialPromotions;
//         variantOptions: VariantOptions;
//         baseOptions: BaseOptions;
//         volumePricesFlag: VolumePricesFlag;
//         volumePrices: VolumePrices;
//         productReferences: ProductReferences;
//         variantMatrix: VariantMatrix;
//         priceRange: PriceRange;
//         multidimensional: Multidimensional;
//     }

//     export interface ProductWsDTO {
//         properties: Properties3;
//     }

//     export interface SerialVersionUID4 {
//         description: string;
//         type: string;
//     }

//     export interface Code2 {
//         type: string;
//     }

//     export interface Name2 {
//         type: string;
//     }

//     export interface Selected {
//         type: string;
//     }

//     export interface Properties4 {
//         serialVersionUID: SerialVersionUID4;
//         code: Code2;
//         name: Name2;
//         selected: Selected;
//     }

//     export interface SortWsDTO {
//         properties: Properties4;
//     }

//     export interface TotalPages {
//         description: string;
//         type: string;
//     }

//     export interface TotalResults {
//         description: string;
//         type: string;
//     }

//     export interface SerialVersionUID5 {
//         description: string;
//         type: string;
//     }

//     export interface PageSize {
//         description: string;
//         type: string;
//     }

//     export interface CurrentPage {
//         description: string;
//         type: string;
//     }

//     export interface Sort {
//         description: string;
//         type: string;
//     }

//     export interface Properties5 {
//         totalPages: TotalPages;
//         totalResults: TotalResults;
//         serialVersionUID: SerialVersionUID5;
//         pageSize: PageSize;
//         currentPage: CurrentPage;
//         sort: Sort;
//     }

//     export interface PaginationWsDTO {
//         properties: Properties5;
//     }

//     export interface SerialVersionUID6 {
//         description: string;
//         type: string;
//     }

//     export interface Url2 {
//         type: string;
//     }

//     export interface Query2 {
//         $ref: string;
//     }

//     export interface Properties6 {
//         serialVersionUID: SerialVersionUID6;
//         url: Url2;
//         query: Query2;
//     }

//     export interface SearchStateWsDTO {
//         properties: Properties6;
//     }

//     export interface SerialVersionUID7 {
//         description: string;
//         type: string;
//     }

//     export interface FacetCode {
//         type: string;
//     }

//     export interface FacetName {
//         type: string;
//     }

//     export interface FacetValueCode {
//         type: string;
//     }

//     export interface FacetValueName {
//         type: string;
//     }

//     export interface RemoveQuery {
//         $ref: string;
//     }

//     export interface TruncateQuery {
//         $ref: string;
//     }

//     export interface Properties7 {
//         serialVersionUID: SerialVersionUID7;
//         facetCode: FacetCode;
//         facetName: FacetName;
//         facetValueCode: FacetValueCode;
//         facetValueName: FacetValueName;
//         removeQuery: RemoveQuery;
//         truncateQuery: TruncateQuery;
//     }

//     export interface BreadcrumbWsDTO {
//         properties: Properties7;
//     }

//     export interface SerialVersionUID8 {
//         description: string;
//         type: string;
//     }

//     export interface Name3 {
//         type: string;
//     }

//     export interface Priority {
//         type: string;
//     }

//     export interface Category {
//         type: string;
//     }

//     export interface MultiSelect {
//         type: string;
//     }

//     export interface Visible {
//         type: string;
//     }

//     export interface Items16 {
//         $ref: string;
//     }

//     export interface TopValues {
//         type: string;
//         items: Items16;
//     }

//     export interface Items17 {
//         $ref: string;
//     }

//     export interface Values {
//         type: string;
//         items: Items17;
//     }

//     export interface Properties8 {
//         serialVersionUID: SerialVersionUID8;
//         name: Name3;
//         priority: Priority;
//         category: Category;
//         multiSelect: MultiSelect;
//         visible: Visible;
//         topValues: TopValues;
//         values: Values;
//     }

//     export interface FacetWsDTO {
//         properties: Properties8;
//     }

//     export interface SerialVersionUID9 {
//         description: string;
//         type: string;
//     }

//     export interface StockLevelStatus {
//         type: string;
//     }

//     export interface StockLevel {
//         type: string;
//     }

//     export interface Properties9 {
//         serialVersionUID: SerialVersionUID9;
//         stockLevelStatus: StockLevelStatus;
//         stockLevel: StockLevel;
//     }

//     export interface StockWsDTO {
//         properties: Properties9;
//     }

//     export interface SerialVersionUID10 {
//         description: string;
//         type: string;
//     }

//     export interface Stock2 {
//         $ref: string;
//     }

//     export interface Date {
//         type: string;
//     }

//     export interface FormattedDate {
//         type: string;
//     }

//     export interface Properties10 {
//         serialVersionUID: SerialVersionUID10;
//         stock: Stock2;
//         date: Date;
//         formattedDate: FormattedDate;
//     }

//     export interface FutureStockWsDTO {
//         properties: Properties10;
//     }

//     export interface SerialVersionUID11 {
//         description: string;
//         type: string;
//     }

//     export interface CurrencyIso {
//         type: string;
//     }

//     export interface Value {
//         type: string;
//     }

//     export interface PriceType {
//         type: string;
//     }

//     export interface FormattedValue {
//         type: string;
//     }

//     export interface MinQuantity {
//         type: string;
//     }

//     export interface MaxQuantity {
//         type: string;
//     }

//     export interface Properties11 {
//         serialVersionUID: SerialVersionUID11;
//         currencyIso: CurrencyIso;
//         value: Value;
//         priceType: PriceType;
//         formattedValue: FormattedValue;
//         minQuantity: MinQuantity;
//         maxQuantity: MaxQuantity;
//     }

//     export interface PriceWsDTO {
//         properties: Properties11;
//     }

//     export interface SerialVersionUID12 {
//         description: string;
//         type: string;
//     }

//     export interface ImageType {
//         type: string;
//     }

//     export interface Format {
//         type: string;
//     }

//     export interface Url3 {
//         type: string;
//     }

//     export interface AltText {
//         type: string;
//     }

//     export interface GalleryIndex {
//         type: string;
//     }

//     export interface Properties12 {
//         serialVersionUID: SerialVersionUID12;
//         imageType: ImageType;
//         format: Format;
//         url: Url3;
//         altText: AltText;
//         galleryIndex: GalleryIndex;
//     }

//     export interface ImageWsDTO {
//         properties: Properties12;
//     }

//     export interface SerialVersionUID13 {
//         description: string;
//         type: string;
//     }

//     export interface Code3 {
//         type: string;
//     }

//     export interface Url4 {
//         type: string;
//     }

//     export interface Image {
//         $ref: string;
//     }

//     export interface Properties13 {
//         serialVersionUID: SerialVersionUID13;
//         code: Code3;
//         url: Url4;
//         image: Image;
//     }

//     export interface CategoryWsDTO {
//         properties: Properties13;
//     }

//     export interface SerialVersionUID14 {
//         description: string;
//         type: string;
//     }

//     export interface Id {
//         type: string;
//     }

//     export interface Headline {
//         type: string;
//     }

//     export interface Comment {
//         type: string;
//     }

//     export interface Rating {
//         type: string;
//     }

//     export interface Date2 {
//         type: string;
//     }

//     export interface Alias {
//         type: string;
//     }

//     export interface Principal {
//         $ref: string;
//     }

//     export interface Properties14 {
//         serialVersionUID: SerialVersionUID14;
//         id: Id;
//         headline: Headline;
//         comment: Comment;
//         rating: Rating;
//         date: Date2;
//         alias: Alias;
//         principal: Principal;
//     }

//     export interface ReviewWsDTO {
//         properties: Properties14;
//     }

//     export interface SerialVersionUID15 {
//         description: string;
//         type: string;
//     }

//     export interface Code4 {
//         type: string;
//     }

//     export interface Name4 {
//         type: string;
//     }

//     export interface Items18 {
//         $ref: string;
//     }

//     export interface Features {
//         type: string;
//         items: Items18;
//     }

//     export interface Properties15 {
//         serialVersionUID: SerialVersionUID15;
//         code: Code4;
//         name: Name4;
//         features: Features;
//     }

//     export interface ClassificationWsDTO {
//         properties: Properties15;
//     }

//     export interface SerialVersionUID16 {
//         description: string;
//         type: string;
//     }

//     export interface Code5 {
//         type: string;
//     }

//     export interface Title {
//         type: string;
//     }

//     export interface PromotionType {
//         type: string;
//     }

//     export interface StartDate {
//         type: string;
//     }

//     export interface EndDate {
//         type: string;
//     }

//     export interface Description2 {
//         type: string;
//     }

//     export interface Items19 {
//         type: string;
//     }

//     export interface CouldFireMessages {
//         type: string;
//         items: Items19;
//     }

//     export interface Items20 {
//         type: string;
//     }

//     export interface FiredMessages {
//         type: string;
//         items: Items20;
//     }

//     export interface ProductBanner {
//         $ref: string;
//     }

//     export interface Enabled {
//         type: string;
//     }

//     export interface Priority2 {
//         type: string;
//     }

//     export interface PromotionGroup {
//         type: string;
//     }

//     export interface Items21 {
//         $ref: string;
//     }

//     export interface Restrictions {
//         type: string;
//         items: Items21;
//     }

//     export interface Properties16 {
//         serialVersionUID: SerialVersionUID16;
//         code: Code5;
//         title: Title;
//         promotionType: PromotionType;
//         startDate: StartDate;
//         endDate: EndDate;
//         description: Description2;
//         couldFireMessages: CouldFireMessages;
//         firedMessages: FiredMessages;
//         productBanner: ProductBanner;
//         enabled: Enabled;
//         priority: Priority2;
//         promotionGroup: PromotionGroup;
//         restrictions: Restrictions;
//     }

//     export interface PromotionWsDTO {
//         properties: Properties16;
//     }

//     export interface SerialVersionUID17 {
//         description: string;
//         type: string;
//     }

//     export interface Code6 {
//         type: string;
//     }

//     export interface Stock3 {
//         $ref: string;
//     }

//     export interface Url5 {
//         type: string;
//     }

//     export interface PriceData {
//         $ref: string;
//     }

//     export interface Items22 {
//         $ref: string;
//     }

//     export interface VariantOptionQualifiers {
//         type: string;
//         items: Items22;
//     }

//     export interface Properties17 {
//         serialVersionUID: SerialVersionUID17;
//         code: Code6;
//         stock: Stock3;
//         url: Url5;
//         priceData: PriceData;
//         variantOptionQualifiers: VariantOptionQualifiers;
//     }

//     export interface VariantOptionWsDTO {
//         properties: Properties17;
//     }

//     export interface SerialVersionUID18 {
//         description: string;
//         type: string;
//     }

//     export interface VariantType2 {
//         type: string;
//     }

//     export interface Items23 {
//         $ref: string;
//     }

//     export interface Options {
//         type: string;
//         items: Items23;
//     }

//     export interface Selected2 {
//         $ref: string;
//     }

//     export interface Properties18 {
//         serialVersionUID: SerialVersionUID18;
//         variantType: VariantType2;
//         options: Options;
//         selected: Selected2;
//     }

//     export interface BaseOptionWsDTO {
//         properties: Properties18;
//     }

//     export interface Preselected {
//         type: string;
//     }

//     export interface SerialVersionUID19 {
//         description: string;
//         type: string;
//     }

//     export interface ReferenceType {
//         type: string;
//     }

//     export interface Description3 {
//         type: string;
//     }

//     export interface Quantity {
//         type: string;
//     }

//     export interface Target {
//         $ref: string;
//     }

//     export interface Properties19 {
//         preselected: Preselected;
//         serialVersionUID: SerialVersionUID19;
//         referenceType: ReferenceType;
//         description: Description3;
//         quantity: Quantity;
//         target: Target;
//     }

//     export interface ProductReferenceWsDTO {
//         properties: Properties19;
//     }

//     export interface SerialVersionUID20 {
//         description: string;
//         type: string;
//     }

//     export interface VariantValueCategory {
//         $ref: string;
//     }

//     export interface ParentVariantCategory {
//         $ref: string;
//     }

//     export interface VariantOption {
//         $ref: string;
//     }

//     export interface Items24 {
//         $ref: string;
//     }

//     export interface Elements {
//         type: string;
//         items: Items24;
//     }

//     export interface IsLeaf {
//         type: string;
//     }

//     export interface Properties20 {
//         serialVersionUID: SerialVersionUID20;
//         variantValueCategory: VariantValueCategory;
//         parentVariantCategory: ParentVariantCategory;
//         variantOption: VariantOption;
//         elements: Elements;
//         isLeaf: IsLeaf;
//     }

//     export interface VariantMatrixElementWsDTO {
//         properties: Properties20;
//     }

//     export interface SerialVersionUID21 {
//         description: string;
//         type: string;
//     }

//     export interface MaxPrice {
//         $ref: string;
//     }

//     export interface MinPrice {
//         $ref: string;
//     }

//     export interface Properties21 {
//         serialVersionUID: SerialVersionUID21;
//         maxPrice: MaxPrice;
//         minPrice: MinPrice;
//     }

//     export interface PriceRangeWsDTO {
//         properties: Properties21;
//     }

//     export interface SerialVersionUID22 {
//         description: string;
//         type: string;
//     }

//     export interface Value2 {
//         type: string;
//     }

//     export interface Properties22 {
//         serialVersionUID: SerialVersionUID22;
//         value: Value2;
//     }

//     export interface SearchQueryWsDTO {
//         properties: Properties22;
//     }

//     export interface SerialVersionUID23 {
//         description: string;
//         type: string;
//     }

//     export interface Name5 {
//         type: string;
//     }

//     export interface Count {
//         type: string;
//     }

//     export interface Query3 {
//         $ref: string;
//     }

//     export interface Selected3 {
//         type: string;
//     }

//     export interface Properties23 {
//         serialVersionUID: SerialVersionUID23;
//         name: Name5;
//         count: Count;
//         query: Query3;
//         selected: Selected3;
//     }

//     export interface FacetValueWsDTO {
//         properties: Properties23;
//     }

//     export interface DefaultAddress {
//         $ref: string;
//     }

//     export interface TitleCode {
//         type: string;
//     }

//     export interface Title2 {
//         type: string;
//     }

//     export interface FirstName {
//         type: string;
//     }

//     export interface LastName {
//         type: string;
//     }

//     export interface Currency {
//         $ref: string;
//     }

//     export interface Language {
//         $ref: string;
//     }

//     export interface DisplayUid {
//         type: string;
//     }

//     export interface CustomerId {
//         type: string;
//     }

//     export interface SerialVersionUID24 {
//         description: string;
//         type: string;
//     }

//     export interface Uid {
//         type: string;
//     }

//     export interface Name6 {
//         type: string;
//     }

//     export interface Properties24 {
//         defaultAddress: DefaultAddress;
//         titleCode: TitleCode;
//         title: Title2;
//         firstName: FirstName;
//         lastName: LastName;
//         currency: Currency;
//         language: Language;
//         displayUid: DisplayUid;
//         customerId: CustomerId;
//         serialVersionUID: SerialVersionUID24;
//         uid: Uid;
//         name: Name6;
//     }

//     export interface UserWsDTO {
//         properties: Properties24;
//     }

//     export interface SerialVersionUID25 {
//         description: string;
//         type: string;
//     }

//     export interface Code7 {
//         type: string;
//     }

//     export interface Name7 {
//         type: string;
//     }

//     export interface Description4 {
//         type: string;
//     }

//     export interface Type {
//         type: string;
//     }

//     export interface Range {
//         type: string;
//     }

//     export interface Comparable {
//         type: string;
//     }

//     export interface FeatureUnit {
//         $ref: string;
//     }

//     export interface Items25 {
//         $ref: string;
//     }

//     export interface FeatureValues {
//         type: string;
//         items: Items25;
//     }

//     export interface Properties25 {
//         serialVersionUID: SerialVersionUID25;
//         code: Code7;
//         name: Name7;
//         description: Description4;
//         type: Type;
//         range: Range;
//         comparable: Comparable;
//         featureUnit: FeatureUnit;
//         featureValues: FeatureValues;
//     }

//     export interface FeatureWsDTO {
//         properties: Properties25;
//     }

//     export interface SerialVersionUID26 {
//         description: string;
//         type: string;
//     }

//     export interface RestrictionType {
//         type: string;
//     }

//     export interface Description5 {
//         type: string;
//     }

//     export interface Properties26 {
//         serialVersionUID: SerialVersionUID26;
//         restrictionType: RestrictionType;
//         description: Description5;
//     }

//     export interface PromotionRestrictionWsDTO {
//         properties: Properties26;
//     }

//     export interface SerialVersionUID27 {
//         description: string;
//         type: string;
//     }

//     export interface Qualifier {
//         type: string;
//     }

//     export interface Name8 {
//         type: string;
//     }

//     export interface Value3 {
//         type: string;
//     }

//     export interface Image2 {
//         $ref: string;
//     }

//     export interface Properties27 {
//         serialVersionUID: SerialVersionUID27;
//         qualifier: Qualifier;
//         name: Name8;
//         value: Value3;
//         image: Image2;
//     }

//     export interface VariantOptionQualifierWsDTO {
//         properties: Properties27;
//     }

//     export interface SerialVersionUID28 {
//         description: string;
//         type: string;
//     }

//     export interface Name9 {
//         type: string;
//     }

//     export interface Sequence {
//         type: string;
//     }

//     export interface Items26 {
//         $ref: string;
//     }

//     export interface SuperCategories {
//         type: string;
//         items: Items26;
//     }

//     export interface Properties28 {
//         serialVersionUID: SerialVersionUID28;
//         name: Name9;
//         sequence: Sequence;
//         superCategories: SuperCategories;
//     }

//     export interface VariantValueCategoryWsDTO {
//         properties: Properties28;
//     }

//     export interface SerialVersionUID29 {
//         description: string;
//         type: string;
//     }

//     export interface Name10 {
//         type: string;
//     }

//     export interface HasImage {
//         type: string;
//     }

//     export interface Priority3 {
//         type: string;
//     }

//     export interface Properties29 {
//         serialVersionUID: SerialVersionUID29;
//         name: Name10;
//         hasImage: HasImage;
//         priority: Priority3;
//     }

//     export interface VariantCategoryWsDTO {
//         properties: Properties29;
//     }

//     export interface SerialVersionUID30 {
//         description: string;
//         type: string;
//     }

//     export interface Id2 {
//         type: string;
//     }

//     export interface Title3 {
//         type: string;
//     }

//     export interface TitleCode2 {
//         type: string;
//     }

//     export interface FirstName2 {
//         type: string;
//     }

//     export interface LastName2 {
//         type: string;
//     }

//     export interface CompanyName {
//         type: string;
//     }

//     export interface Line1 {
//         type: string;
//     }

//     export interface Line2 {
//         type: string;
//     }

//     export interface Town {
//         type: string;
//     }

//     export interface Region {
//         $ref: string;
//     }

//     export interface PostalCode {
//         type: string;
//     }

//     export interface Phone {
//         type: string;
//     }

//     export interface Email {
//         type: string;
//     }

//     export interface Country {
//         $ref: string;
//     }

//     export interface ShippingAddress {
//         type: string;
//     }

//     export interface DefaultAddress2 {
//         type: string;
//     }

//     export interface VisibleInAddressBook {
//         type: string;
//     }

//     export interface FormattedAddress {
//         type: string;
//     }

//     export interface Properties30 {
//         serialVersionUID: SerialVersionUID30;
//         id: Id2;
//         title: Title3;
//         titleCode: TitleCode2;
//         firstName: FirstName2;
//         lastName: LastName2;
//         companyName: CompanyName;
//         line1: Line1;
//         line2: Line2;
//         town: Town;
//         region: Region;
//         postalCode: PostalCode;
//         phone: Phone;
//         email: Email;
//         country: Country;
//         shippingAddress: ShippingAddress;
//         defaultAddress: DefaultAddress2;
//         visibleInAddressBook: VisibleInAddressBook;
//         formattedAddress: FormattedAddress;
//     }

//     export interface AddressWsDTO {
//         properties: Properties30;
//     }

//     export interface SerialVersionUID31 {
//         description: string;
//         type: string;
//     }

//     export interface Isocode {
//         type: string;
//     }

//     export interface Name11 {
//         type: string;
//     }

//     export interface Active {
//         type: string;
//     }

//     export interface Symbol {
//         type: string;
//     }

//     export interface Properties31 {
//         serialVersionUID: SerialVersionUID31;
//         isocode: Isocode;
//         name: Name11;
//         active: Active;
//         symbol: Symbol;
//     }

//     export interface CurrencyWsDTO {
//         properties: Properties31;
//     }

//     export interface SerialVersionUID32 {
//         description: string;
//         type: string;
//     }

//     export interface Isocode2 {
//         type: string;
//     }

//     export interface Name12 {
//         type: string;
//     }

//     export interface NativeName {
//         type: string;
//     }

//     export interface Active2 {
//         type: string;
//     }

//     export interface Properties32 {
//         serialVersionUID: SerialVersionUID32;
//         isocode: Isocode2;
//         name: Name12;
//         nativeName: NativeName;
//         active: Active2;
//     }

//     export interface LanguageWsDTO {
//         properties: Properties32;
//     }

//     export interface SerialVersionUID33 {
//         description: string;
//         type: string;
//     }

//     export interface Symbol2 {
//         type: string;
//     }

//     export interface Name13 {
//         type: string;
//     }

//     export interface UnitType {
//         type: string;
//     }

//     export interface Properties33 {
//         serialVersionUID: SerialVersionUID33;
//         symbol: Symbol2;
//         name: Name13;
//         unitType: UnitType;
//     }

//     export interface FeatureUnitWsDTO {
//         properties: Properties33;
//     }

//     export interface SerialVersionUID34 {
//         description: string;
//         type: string;
//     }

//     export interface Value4 {
//         type: string;
//     }

//     export interface Properties34 {
//         serialVersionUID: SerialVersionUID34;
//         value: Value4;
//     }

//     export interface FeatureValueWsDTO {
//         properties: Properties34;
//     }

//     export interface SerialVersionUID35 {
//         description: string;
//         type: string;
//     }

//     export interface Isocode3 {
//         type: string;
//     }

//     export interface IsocodeShort {
//         type: string;
//     }

//     export interface CountryIso {
//         type: string;
//     }

//     export interface Name14 {
//         type: string;
//     }

//     export interface Properties35 {
//         serialVersionUID: SerialVersionUID35;
//         isocode: Isocode3;
//         isocodeShort: IsocodeShort;
//         countryIso: CountryIso;
//         name: Name14;
//     }

//     export interface RegionWsDTO {
//         properties: Properties35;
//     }

//     export interface SerialVersionUID36 {
//         description: string;
//         type: string;
//     }

//     export interface Isocode4 {
//         type: string;
//     }

//     export interface Name15 {
//         type: string;
//     }

//     export interface Properties36 {
//         serialVersionUID: SerialVersionUID36;
//         isocode: Isocode4;
//         name: Name15;
//     }

//     export interface CountryWsDTO {
//         properties: Properties36;
//     }

//     export interface Definitions {
//         SpellingSuggestionWsDTO: SpellingSuggestionWsDTO;
//         ProductWsDTO: ProductWsDTO;
//         SortWsDTO: SortWsDTO;
//         PaginationWsDTO: PaginationWsDTO;
//         SearchStateWsDTO: SearchStateWsDTO;
//         BreadcrumbWsDTO: BreadcrumbWsDTO;
//         FacetWsDTO: FacetWsDTO;
//         StockWsDTO: StockWsDTO;
//         FutureStockWsDTO: FutureStockWsDTO;
//         PriceWsDTO: PriceWsDTO;
//         ImageWsDTO: ImageWsDTO;
//         CategoryWsDTO: CategoryWsDTO;
//         ReviewWsDTO: ReviewWsDTO;
//         ClassificationWsDTO: ClassificationWsDTO;
//         PromotionWsDTO: PromotionWsDTO;
//         VariantOptionWsDTO: VariantOptionWsDTO;
//         BaseOptionWsDTO: BaseOptionWsDTO;
//         ProductReferenceWsDTO: ProductReferenceWsDTO;
//         VariantMatrixElementWsDTO: VariantMatrixElementWsDTO;
//         PriceRangeWsDTO: PriceRangeWsDTO;
//         SearchQueryWsDTO: SearchQueryWsDTO;
//         FacetValueWsDTO: FacetValueWsDTO;
//         UserWsDTO: UserWsDTO;
//         FeatureWsDTO: FeatureWsDTO;
//         PromotionRestrictionWsDTO: PromotionRestrictionWsDTO;
//         VariantOptionQualifierWsDTO: VariantOptionQualifierWsDTO;
//         VariantValueCategoryWsDTO: VariantValueCategoryWsDTO;
//         VariantCategoryWsDTO: VariantCategoryWsDTO;
//         AddressWsDTO: AddressWsDTO;
//         CurrencyWsDTO: CurrencyWsDTO;
//         LanguageWsDTO: LanguageWsDTO;
//         FeatureUnitWsDTO: FeatureUnitWsDTO;
//         FeatureValueWsDTO: FeatureValueWsDTO;
//         RegionWsDTO: RegionWsDTO;
//         CountryWsDTO: CountryWsDTO;
//     }

//     export interface RootObject {
//         $schema: string;
//         title: string;
//         type: string;
//         description: string;
//         properties: Properties;
//         definitions: Definitions;
//     }

// }









//     export interface PriceRange {
//     }

//     export interface Stock {
//         stockLevelStatus: string;
//         stockLevel?: number;
//     }

//     export interface Product {
//         availableForPickup: boolean;
//         averageRating: number;
//         code: string;
//         description: string;
//         manufacturer: string;
//         multidimensional: boolean;
//         name: string;
//         price: Price;
//         priceRange: PriceRange;
//         stock: Stock;
//         summary: string;
//         url: string;
//     }

//     export interface Sort {
//         code: string;
//         name: string;
//         selected: boolean;
//     }

//     export interface ProductCategorySearchPageWsDTO {
//         type: string;
//         currentQuery: CurrentQuery;
//         freeTextSearch: string;
//         pagination: Pagination;
//         products: Product[];
//         sorts: Sort[];
//     }

// }


// declare module namespace {

//     export interface SerialVersionUID {
//         description: string;
//         type: string;
//     }

//     export interface FreeTextSearch {
//         type: string;
//     }

//     export interface CategoryCode {
//         type: string;
//     }

//     export interface KeywordRedirectUrl {
//         type: string;
//     }

//     export interface SpellingSuggestion {
//         $ref: string;
//     }

//     export interface Items {
//         $ref: string;
//     }

//     export interface Products {
//         type: string;
//         items: Items;
//     }

//     export interface Items2 {
//         $ref: string;
//     }

//     export interface Sorts {
//         type: string;
//         items: Items2;
//     }

//     export interface Pagination {
//         $ref: string;
//     }

//     export interface CurrentQuery {
//         $ref: string;
//     }

//     export interface Items3 {
//         $ref: string;
//     }

//     export interface Breadcrumbs {
//         type: string;
//         items: Items3;
//     }

//     export interface Items4 {
//         $ref: string;
//     }

//     export interface Facets {
//         type: string;
//         items: Items4;
//     }

//     export interface Properties {
//         serialVersionUID: SerialVersionUID;
//         freeTextSearch: FreeTextSearch;
//         categoryCode: CategoryCode;
//         keywordRedirectUrl: KeywordRedirectUrl;
//         spellingSuggestion: SpellingSuggestion;
//         products: Products;
//         sorts: Sorts;
//         pagination: Pagination;
//         currentQuery: CurrentQuery;
//         breadcrumbs: Breadcrumbs;
//         facets: Facets;
//     }

//     export interface SerialVersionUID2 {
//         description: string;
//         type: string;
//     }

//     export interface Suggestion {
//         type: string;
//     }

//     export interface Query {
//         type: string;
//     }

//     export interface Properties2 {
//         serialVersionUID: SerialVersionUID2;
//         suggestion: Suggestion;
//         query: Query;
//     }

//     export interface SpellingSuggestionWsDTO {
//         properties: Properties2;
//     }

//     export interface SerialVersionUID3 {
//         description: string;
//         type: string;
//     }

//     export interface Code {
//         type: string;
//     }

//     export interface Name {
//         type: string;
//     }

//     export interface Url {
//         type: string;
//     }

//     export interface Description {
//         type: string;
//     }

//     export interface Purchasable {
//         type: string;
//     }

//     export interface Stock {
//         $ref: string;
//     }

//     export interface Items5 {
//         $ref: string;
//     }

//     export interface FutureStocks {
//         type: string;
//         items: Items5;
//     }

//     export interface AvailableForPickup {
//         type: string;
//     }

//     export interface AverageRating {
//         type: string;
//     }

//     export interface NumberOfReviews {
//         type: string;
//     }

//     export interface Summary {
//         type: string;
//     }

//     export interface Manufacturer {
//         type: string;
//     }

//     export interface VariantType {
//         type: string;
//     }

//     export interface Price {
//         $ref: string;
//     }

//     export interface BaseProduct {
//         type: string;
//     }

//     export interface Items6 {
//         $ref: string;
//     }

//     export interface Images {
//         type: string;
//         items: Items6;
//     }

//     export interface Items7 {
//         $ref: string;
//     }

//     export interface Categories {
//         type: string;
//         items: Items7;
//     }

//     export interface Items8 {
//         $ref: string;
//     }

//     export interface Reviews {
//         type: string;
//         items: Items8;
//     }

//     export interface Items9 {
//         $ref: string;
//     }

//     export interface Classifications {
//         type: string;
//         items: Items9;
//     }

//     export interface Items10 {
//         $ref: string;
//     }

//     export interface PotentialPromotions {
//         type: string;
//         items: Items10;
//     }

//     export interface Items11 {
//         $ref: string;
//     }

//     export interface VariantOptions {
//         type: string;
//         items: Items11;
//     }

//     export interface Items12 {
//         $ref: string;
//     }

//     export interface BaseOptions {
//         type: string;
//         items: Items12;
//     }

//     export interface VolumePricesFlag {
//         type: string;
//     }

//     export interface Items13 {
//         $ref: string;
//     }

//     export interface VolumePrices {
//         type: string;
//         items: Items13;
//     }

//     export interface Items14 {
//         $ref: string;
//     }

//     export interface ProductReferences {
//         type: string;
//         items: Items14;
//     }

//     export interface Items15 {
//         $ref: string;
//     }

//     export interface VariantMatrix {
//         type: string;
//         items: Items15;
//     }

//     export interface PriceRange {
//         $ref: string;
//     }

//     export interface Multidimensional {
//         type: string;
//     }

//     export interface Properties3 {
//         serialVersionUID: SerialVersionUID3;
//         code: Code;
//         name: Name;
//         url: Url;
//         description: Description;
//         purchasable: Purchasable;
//         stock: Stock;
//         futureStocks: FutureStocks;
//         availableForPickup: AvailableForPickup;
//         averageRating: AverageRating;
//         numberOfReviews: NumberOfReviews;
//         summary: Summary;
//         manufacturer: Manufacturer;
//         variantType: VariantType;
//         price: Price;
//         baseProduct: BaseProduct;
//         images: Images;
//         categories: Categories;
//         reviews: Reviews;
//         classifications: Classifications;
//         potentialPromotions: PotentialPromotions;
//         variantOptions: VariantOptions;
//         baseOptions: BaseOptions;
//         volumePricesFlag: VolumePricesFlag;
//         volumePrices: VolumePrices;
//         productReferences: ProductReferences;
//         variantMatrix: VariantMatrix;
//         priceRange: PriceRange;
//         multidimensional: Multidimensional;
//     }

//     export interface ProductWsDTO {
//         properties: Properties3;
//     }

//     export interface SerialVersionUID4 {
//         description: string;
//         type: string;
//     }

//     export interface Code2 {
//         type: string;
//     }

//     export interface Name2 {
//         type: string;
//     }

//     export interface Selected {
//         type: string;
//     }

//     export interface Properties4 {
//         serialVersionUID: SerialVersionUID4;
//         code: Code2;
//         name: Name2;
//         selected: Selected;
//     }

//     export interface SortWsDTO {
//         properties: Properties4;
//     }

//     export interface TotalPages {
//         description: string;
//         type: string;
//     }

//     export interface TotalResults {
//         description: string;
//         type: string;
//     }

//     export interface SerialVersionUID5 {
//         description: string;
//         type: string;
//     }

//     export interface PageSize {
//         description: string;
//         type: string;
//     }

//     export interface CurrentPage {
//         description: string;
//         type: string;
//     }

//     export interface Sort {
//         description: string;
//         type: string;
//     }

//     export interface Properties5 {
//         totalPages: TotalPages;
//         totalResults: TotalResults;
//         serialVersionUID: SerialVersionUID5;
//         pageSize: PageSize;
//         currentPage: CurrentPage;
//         sort: Sort;
//     }

//     export interface PaginationWsDTO {
//         properties: Properties5;
//     }

//     export interface SerialVersionUID6 {
//         description: string;
//         type: string;
//     }

//     export interface Url2 {
//         type: string;
//     }

//     export interface Query2 {
//         $ref: string;
//     }

//     export interface Properties6 {
//         serialVersionUID: SerialVersionUID6;
//         url: Url2;
//         query: Query2;
//     }

//     export interface SearchStateWsDTO {
//         properties: Properties6;
//     }

//     export interface SerialVersionUID7 {
//         description: string;
//         type: string;
//     }

//     export interface FacetCode {
//         type: string;
//     }

//     export interface FacetName {
//         type: string;
//     }

//     export interface FacetValueCode {
//         type: string;
//     }

//     export interface FacetValueName {
//         type: string;
//     }

//     export interface RemoveQuery {
//         $ref: string;
//     }

//     export interface TruncateQuery {
//         $ref: string;
//     }

//     export interface Properties7 {
//         serialVersionUID: SerialVersionUID7;
//         facetCode: FacetCode;
//         facetName: FacetName;
//         facetValueCode: FacetValueCode;
//         facetValueName: FacetValueName;
//         removeQuery: RemoveQuery;
//         truncateQuery: TruncateQuery;
//     }

//     export interface BreadcrumbWsDTO {
//         properties: Properties7;
//     }

//     export interface SerialVersionUID8 {
//         description: string;
//         type: string;
//     }

//     export interface Name3 {
//         type: string;
//     }

//     export interface Priority {
//         type: string;
//     }

//     export interface Category {
//         type: string;
//     }

//     export interface MultiSelect {
//         type: string;
//     }

//     export interface Visible {
//         type: string;
//     }

//     export interface Items16 {
//         $ref: string;
//     }

//     export interface TopValues {
//         type: string;
//         items: Items16;
//     }

//     export interface Items17 {
//         $ref: string;
//     }

//     export interface Values {
//         type: string;
//         items: Items17;
//     }

//     export interface Properties8 {
//         serialVersionUID: SerialVersionUID8;
//         name: Name3;
//         priority: Priority;
//         category: Category;
//         multiSelect: MultiSelect;
//         visible: Visible;
//         topValues: TopValues;
//         values: Values;
//     }

//     export interface FacetWsDTO {
//         properties: Properties8;
//     }

//     export interface SerialVersionUID9 {
//         description: string;
//         type: string;
//     }

//     export interface StockLevelStatus {
//         type: string;
//     }

//     export interface StockLevel {
//         type: string;
//     }

//     export interface Properties9 {
//         serialVersionUID: SerialVersionUID9;
//         stockLevelStatus: StockLevelStatus;
//         stockLevel: StockLevel;
//     }

//     export interface StockWsDTO {
//         properties: Properties9;
//     }

//     export interface SerialVersionUID10 {
//         description: string;
//         type: string;
//     }

//     export interface Stock2 {
//         $ref: string;
//     }

//     export interface Date {
//         type: string;
//     }

//     export interface FormattedDate {
//         type: string;
//     }

//     export interface Properties10 {
//         serialVersionUID: SerialVersionUID10;
//         stock: Stock2;
//         date: Date;
//         formattedDate: FormattedDate;
//     }

//     export interface FutureStockWsDTO {
//         properties: Properties10;
//     }

//     export interface SerialVersionUID11 {
//         description: string;
//         type: string;
//     }

//     export interface CurrencyIso {
//         type: string;
//     }

//     export interface Value {
//         type: string;
//     }

//     export interface PriceType {
//         type: string;
//     }

//     export interface FormattedValue {
//         type: string;
//     }

//     export interface MinQuantity {
//         type: string;
//     }

//     export interface MaxQuantity {
//         type: string;
//     }

//     export interface Properties11 {
//         serialVersionUID: SerialVersionUID11;
//         currencyIso: CurrencyIso;
//         value: Value;
//         priceType: PriceType;
//         formattedValue: FormattedValue;
//         minQuantity: MinQuantity;
//         maxQuantity: MaxQuantity;
//     }

//     export interface PriceWsDTO {
//         properties: Properties11;
//     }

//     export interface SerialVersionUID12 {
//         description: string;
//         type: string;
//     }

//     export interface ImageType {
//         type: string;
//     }

//     export interface Format {
//         type: string;
//     }

//     export interface Url3 {
//         type: string;
//     }

//     export interface AltText {
//         type: string;
//     }

//     export interface GalleryIndex {
//         type: string;
//     }

//     export interface Properties12 {
//         serialVersionUID: SerialVersionUID12;
//         imageType: ImageType;
//         format: Format;
//         url: Url3;
//         altText: AltText;
//         galleryIndex: GalleryIndex;
//     }

//     export interface ImageWsDTO {
//         properties: Properties12;
//     }

//     export interface SerialVersionUID13 {
//         description: string;
//         type: string;
//     }

//     export interface Code3 {
//         type: string;
//     }

//     export interface Url4 {
//         type: string;
//     }

//     export interface Image {
//         $ref: string;
//     }

//     export interface Properties13 {
//         serialVersionUID: SerialVersionUID13;
//         code: Code3;
//         url: Url4;
//         image: Image;
//     }

//     export interface CategoryWsDTO {
//         properties: Properties13;
//     }

//     export interface SerialVersionUID14 {
//         description: string;
//         type: string;
//     }

//     export interface Id {
//         type: string;
//     }

//     export interface Headline {
//         type: string;
//     }

//     export interface Comment {
//         type: string;
//     }

//     export interface Rating {
//         type: string;
//     }

//     export interface Date2 {
//         type: string;
//     }

//     export interface Alias {
//         type: string;
//     }

//     export interface Principal {
//         $ref: string;
//     }

//     export interface Properties14 {
//         serialVersionUID: SerialVersionUID14;
//         id: Id;
//         headline: Headline;
//         comment: Comment;
//         rating: Rating;
//         date: Date2;
//         alias: Alias;
//         principal: Principal;
//     }

//     export interface ReviewWsDTO {
//         properties: Properties14;
//     }

//     export interface SerialVersionUID15 {
//         description: string;
//         type: string;
//     }

//     export interface Code4 {
//         type: string;
//     }

//     export interface Name4 {
//         type: string;
//     }

//     export interface Items18 {
//         $ref: string;
//     }

//     export interface Features {
//         type: string;
//         items: Items18;
//     }

//     export interface Properties15 {
//         serialVersionUID: SerialVersionUID15;
//         code: Code4;
//         name: Name4;
//         features: Features;
//     }

//     export interface ClassificationWsDTO {
//         properties: Properties15;
//     }

//     export interface SerialVersionUID16 {
//         description: string;
//         type: string;
//     }

//     export interface Code5 {
//         type: string;
//     }

//     export interface Title {
//         type: string;
//     }

//     export interface PromotionType {
//         type: string;
//     }

//     export interface StartDate {
//         type: string;
//     }

//     export interface EndDate {
//         type: string;
//     }

//     export interface Description2 {
//         type: string;
//     }

//     export interface Items19 {
//         type: string;
//     }

//     export interface CouldFireMessages {
//         type: string;
//         items: Items19;
//     }

//     export interface Items20 {
//         type: string;
//     }

//     export interface FiredMessages {
//         type: string;
//         items: Items20;
//     }

//     export interface ProductBanner {
//         $ref: string;
//     }

//     export interface Enabled {
//         type: string;
//     }

//     export interface Priority2 {
//         type: string;
//     }

//     export interface PromotionGroup {
//         type: string;
//     }

//     export interface Items21 {
//         $ref: string;
//     }

//     export interface Restrictions {
//         type: string;
//         items: Items21;
//     }

//     export interface Properties16 {
//         serialVersionUID: SerialVersionUID16;
//         code: Code5;
//         title: Title;
//         promotionType: PromotionType;
//         startDate: StartDate;
//         endDate: EndDate;
//         description: Description2;
//         couldFireMessages: CouldFireMessages;
//         firedMessages: FiredMessages;
//         productBanner: ProductBanner;
//         enabled: Enabled;
//         priority: Priority2;
//         promotionGroup: PromotionGroup;
//         restrictions: Restrictions;
//     }

//     export interface PromotionWsDTO {
//         properties: Properties16;
//     }

//     export interface SerialVersionUID17 {
//         description: string;
//         type: string;
//     }

//     export interface Code6 {
//         type: string;
//     }

//     export interface Stock3 {
//         $ref: string;
//     }

//     export interface Url5 {
//         type: string;
//     }

//     export interface PriceData {
//         $ref: string;
//     }

//     export interface Items22 {
//         $ref: string;
//     }

//     export interface VariantOptionQualifiers {
//         type: string;
//         items: Items22;
//     }

//     export interface Properties17 {
//         serialVersionUID: SerialVersionUID17;
//         code: Code6;
//         stock: Stock3;
//         url: Url5;
//         priceData: PriceData;
//         variantOptionQualifiers: VariantOptionQualifiers;
//     }

//     export interface VariantOptionWsDTO {
//         properties: Properties17;
//     }

//     export interface SerialVersionUID18 {
//         description: string;
//         type: string;
//     }

//     export interface VariantType2 {
//         type: string;
//     }

//     export interface Items23 {
//         $ref: string;
//     }

//     export interface Options {
//         type: string;
//         items: Items23;
//     }

//     export interface Selected2 {
//         $ref: string;
//     }

//     export interface Properties18 {
//         serialVersionUID: SerialVersionUID18;
//         variantType: VariantType2;
//         options: Options;
//         selected: Selected2;
//     }

//     export interface BaseOptionWsDTO {
//         properties: Properties18;
//     }

//     export interface Preselected {
//         type: string;
//     }

//     export interface SerialVersionUID19 {
//         description: string;
//         type: string;
//     }

//     export interface ReferenceType {
//         type: string;
//     }

//     export interface Description3 {
//         type: string;
//     }

//     export interface Quantity {
//         type: string;
//     }

//     export interface Target {
//         $ref: string;
//     }

//     export interface Properties19 {
//         preselected: Preselected;
//         serialVersionUID: SerialVersionUID19;
//         referenceType: ReferenceType;
//         description: Description3;
//         quantity: Quantity;
//         target: Target;
//     }

//     export interface ProductReferenceWsDTO {
//         properties: Properties19;
//     }

//     export interface SerialVersionUID20 {
//         description: string;
//         type: string;
//     }

//     export interface VariantValueCategory {
//         $ref: string;
//     }

//     export interface ParentVariantCategory {
//         $ref: string;
//     }

//     export interface VariantOption {
//         $ref: string;
//     }

//     export interface Items24 {
//         $ref: string;
//     }

//     export interface Elements {
//         type: string;
//         items: Items24;
//     }

//     export interface IsLeaf {
//         type: string;
//     }

//     export interface Properties20 {
//         serialVersionUID: SerialVersionUID20;
//         variantValueCategory: VariantValueCategory;
//         parentVariantCategory: ParentVariantCategory;
//         variantOption: VariantOption;
//         elements: Elements;
//         isLeaf: IsLeaf;
//     }

//     export interface VariantMatrixElementWsDTO {
//         properties: Properties20;
//     }

//     export interface SerialVersionUID21 {
//         description: string;
//         type: string;
//     }

//     export interface MaxPrice {
//         $ref: string;
//     }

//     export interface MinPrice {
//         $ref: string;
//     }

//     export interface Properties21 {
//         serialVersionUID: SerialVersionUID21;
//         maxPrice: MaxPrice;
//         minPrice: MinPrice;
//     }

//     export interface PriceRangeWsDTO {
//         properties: Properties21;
//     }

//     export interface SerialVersionUID22 {
//         description: string;
//         type: string;
//     }

//     export interface Value2 {
//         type: string;
//     }

//     export interface Properties22 {
//         serialVersionUID: SerialVersionUID22;
//         value: Value2;
//     }

//     export interface SearchQueryWsDTO {
//         properties: Properties22;
//     }

//     export interface SerialVersionUID23 {
//         description: string;
//         type: string;
//     }

//     export interface Name5 {
//         type: string;
//     }

//     export interface Count {
//         type: string;
//     }

//     export interface Query3 {
//         $ref: string;
//     }

//     export interface Selected3 {
//         type: string;
//     }

//     export interface Properties23 {
//         serialVersionUID: SerialVersionUID23;
//         name: Name5;
//         count: Count;
//         query: Query3;
//         selected: Selected3;
//     }

//     export interface FacetValueWsDTO {
//         properties: Properties23;
//     }

//     export interface DefaultAddress {
//         $ref: string;
//     }

//     export interface TitleCode {
//         type: string;
//     }

//     export interface Title2 {
//         type: string;
//     }

//     export interface FirstName {
//         type: string;
//     }

//     export interface LastName {
//         type: string;
//     }

//     export interface Currency {
//         $ref: string;
//     }

//     export interface Language {
//         $ref: string;
//     }

//     export interface DisplayUid {
//         type: string;
//     }

//     export interface CustomerId {
//         type: string;
//     }

//     export interface SerialVersionUID24 {
//         description: string;
//         type: string;
//     }

//     export interface Uid {
//         type: string;
//     }

//     export interface Name6 {
//         type: string;
//     }

//     export interface Properties24 {
//         defaultAddress: DefaultAddress;
//         titleCode: TitleCode;
//         title: Title2;
//         firstName: FirstName;
//         lastName: LastName;
//         currency: Currency;
//         language: Language;
//         displayUid: DisplayUid;
//         customerId: CustomerId;
//         serialVersionUID: SerialVersionUID24;
//         uid: Uid;
//         name: Name6;
//     }

//     export interface UserWsDTO {
//         properties: Properties24;
//     }

//     export interface SerialVersionUID25 {
//         description: string;
//         type: string;
//     }

//     export interface Code7 {
//         type: string;
//     }

//     export interface Name7 {
//         type: string;
//     }

//     export interface Description4 {
//         type: string;
//     }

//     export interface Type {
//         type: string;
//     }

//     export interface Range {
//         type: string;
//     }

//     export interface Comparable {
//         type: string;
//     }

//     export interface FeatureUnit {
//         $ref: string;
//     }

//     export interface Items25 {
//         $ref: string;
//     }

//     export interface FeatureValues {
//         type: string;
//         items: Items25;
//     }

//     export interface Properties25 {
//         serialVersionUID: SerialVersionUID25;
//         code: Code7;
//         name: Name7;
//         description: Description4;
//         type: Type;
//         range: Range;
//         comparable: Comparable;
//         featureUnit: FeatureUnit;
//         featureValues: FeatureValues;
//     }

//     export interface FeatureWsDTO {
//         properties: Properties25;
//     }

//     export interface SerialVersionUID26 {
//         description: string;
//         type: string;
//     }

//     export interface RestrictionType {
//         type: string;
//     }

//     export interface Description5 {
//         type: string;
//     }

//     export interface Properties26 {
//         serialVersionUID: SerialVersionUID26;
//         restrictionType: RestrictionType;
//         description: Description5;
//     }

//     export interface PromotionRestrictionWsDTO {
//         properties: Properties26;
//     }

//     export interface SerialVersionUID27 {
//         description: string;
//         type: string;
//     }

//     export interface Qualifier {
//         type: string;
//     }

//     export interface Name8 {
//         type: string;
//     }

//     export interface Value3 {
//         type: string;
//     }

//     export interface Image2 {
//         $ref: string;
//     }

//     export interface Properties27 {
//         serialVersionUID: SerialVersionUID27;
//         qualifier: Qualifier;
//         name: Name8;
//         value: Value3;
//         image: Image2;
//     }

//     export interface VariantOptionQualifierWsDTO {
//         properties: Properties27;
//     }

//     export interface SerialVersionUID28 {
//         description: string;
//         type: string;
//     }

//     export interface Name9 {
//         type: string;
//     }

//     export interface Sequence {
//         type: string;
//     }

//     export interface Items26 {
//         $ref: string;
//     }

//     export interface SuperCategories {
//         type: string;
//         items: Items26;
//     }

//     export interface Properties28 {
//         serialVersionUID: SerialVersionUID28;
//         name: Name9;
//         sequence: Sequence;
//         superCategories: SuperCategories;
//     }

//     export interface VariantValueCategoryWsDTO {
//         properties: Properties28;
//     }

//     export interface SerialVersionUID29 {
//         description: string;
//         type: string;
//     }

//     export interface Name10 {
//         type: string;
//     }

//     export interface HasImage {
//         type: string;
//     }

//     export interface Priority3 {
//         type: string;
//     }

//     export interface Properties29 {
//         serialVersionUID: SerialVersionUID29;
//         name: Name10;
//         hasImage: HasImage;
//         priority: Priority3;
//     }

//     export interface VariantCategoryWsDTO {
//         properties: Properties29;
//     }

//     export interface SerialVersionUID30 {
//         description: string;
//         type: string;
//     }

//     export interface Id2 {
//         type: string;
//     }

//     export interface Title3 {
//         type: string;
//     }

//     export interface TitleCode2 {
//         type: string;
//     }

//     export interface FirstName2 {
//         type: string;
//     }

//     export interface LastName2 {
//         type: string;
//     }

//     export interface CompanyName {
//         type: string;
//     }

//     export interface Line1 {
//         type: string;
//     }

//     export interface Line2 {
//         type: string;
//     }

//     export interface Town {
//         type: string;
//     }

//     export interface Region {
//         $ref: string;
//     }

//     export interface PostalCode {
//         type: string;
//     }

//     export interface Phone {
//         type: string;
//     }

//     export interface Email {
//         type: string;
//     }

//     export interface Country {
//         $ref: string;
//     }

//     export interface ShippingAddress {
//         type: string;
//     }

//     export interface DefaultAddress2 {
//         type: string;
//     }

//     export interface VisibleInAddressBook {
//         type: string;
//     }

//     export interface FormattedAddress {
//         type: string;
//     }

//     export interface Properties30 {
//         serialVersionUID: SerialVersionUID30;
//         id: Id2;
//         title: Title3;
//         titleCode: TitleCode2;
//         firstName: FirstName2;
//         lastName: LastName2;
//         companyName: CompanyName;
//         line1: Line1;
//         line2: Line2;
//         town: Town;
//         region: Region;
//         postalCode: PostalCode;
//         phone: Phone;
//         email: Email;
//         country: Country;
//         shippingAddress: ShippingAddress;
//         defaultAddress: DefaultAddress2;
//         visibleInAddressBook: VisibleInAddressBook;
//         formattedAddress: FormattedAddress;
//     }

//     export interface AddressWsDTO {
//         properties: Properties30;
//     }

//     export interface SerialVersionUID31 {
//         description: string;
//         type: string;
//     }

//     export interface Isocode {
//         type: string;
//     }

//     export interface Name11 {
//         type: string;
//     }

//     export interface Active {
//         type: string;
//     }

//     export interface Symbol {
//         type: string;
//     }

//     export interface Properties31 {
//         serialVersionUID: SerialVersionUID31;
//         isocode: Isocode;
//         name: Name11;
//         active: Active;
//         symbol: Symbol;
//     }

//     export interface CurrencyWsDTO {
//         properties: Properties31;
//     }

//     export interface SerialVersionUID32 {
//         description: string;
//         type: string;
//     }

//     export interface Isocode2 {
//         type: string;
//     }

//     export interface Name12 {
//         type: string;
//     }

//     export interface NativeName {
//         type: string;
//     }

//     export interface Active2 {
//         type: string;
//     }

//     export interface Properties32 {
//         serialVersionUID: SerialVersionUID32;
//         isocode: Isocode2;
//         name: Name12;
//         nativeName: NativeName;
//         active: Active2;
//     }

//     export interface LanguageWsDTO {
//         properties: Properties32;
//     }

//     export interface SerialVersionUID33 {
//         description: string;
//         type: string;
//     }

//     export interface Symbol2 {
//         type: string;
//     }

//     export interface Name13 {
//         type: string;
//     }

//     export interface UnitType {
//         type: string;
//     }

//     export interface Properties33 {
//         serialVersionUID: SerialVersionUID33;
//         symbol: Symbol2;
//         name: Name13;
//         unitType: UnitType;
//     }

//     export interface FeatureUnitWsDTO {
//         properties: Properties33;
//     }

//     export interface SerialVersionUID34 {
//         description: string;
//         type: string;
//     }

//     export interface Value4 {
//         type: string;
//     }

//     export interface Properties34 {
//         serialVersionUID: SerialVersionUID34;
//         value: Value4;
//     }

//     export interface FeatureValueWsDTO {
//         properties: Properties34;
//     }

//     export interface SerialVersionUID35 {
//         description: string;
//         type: string;
//     }

//     export interface Isocode3 {
//         type: string;
//     }

//     export interface IsocodeShort {
//         type: string;
//     }

//     export interface CountryIso {
//         type: string;
//     }

//     export interface Name14 {
//         type: string;
//     }

//     export interface Properties35 {
//         serialVersionUID: SerialVersionUID35;
//         isocode: Isocode3;
//         isocodeShort: IsocodeShort;
//         countryIso: CountryIso;
//         name: Name14;
//     }

//     export interface RegionWsDTO {
//         properties: Properties35;
//     }

//     export interface SerialVersionUID36 {
//         description: string;
//         type: string;
//     }

//     export interface Isocode4 {
//         type: string;
//     }

//     export interface Name15 {
//         type: string;
//     }

//     export interface Properties36 {
//         serialVersionUID: SerialVersionUID36;
//         isocode: Isocode4;
//         name: Name15;
//     }

//     export interface CountryWsDTO {
//         properties: Properties36;
//     }

//     export interface Definitions {
//         SpellingSuggestionWsDTO: SpellingSuggestionWsDTO;
//         ProductWsDTO: ProductWsDTO;
//         SortWsDTO: SortWsDTO;
//         PaginationWsDTO: PaginationWsDTO;
//         SearchStateWsDTO: SearchStateWsDTO;
//         BreadcrumbWsDTO: BreadcrumbWsDTO;
//         FacetWsDTO: FacetWsDTO;
//         StockWsDTO: StockWsDTO;
//         FutureStockWsDTO: FutureStockWsDTO;
//         PriceWsDTO: PriceWsDTO;
//         ImageWsDTO: ImageWsDTO;
//         CategoryWsDTO: CategoryWsDTO;
//         ReviewWsDTO: ReviewWsDTO;
//         ClassificationWsDTO: ClassificationWsDTO;
//         PromotionWsDTO: PromotionWsDTO;
//         VariantOptionWsDTO: VariantOptionWsDTO;
//         BaseOptionWsDTO: BaseOptionWsDTO;
//         ProductReferenceWsDTO: ProductReferenceWsDTO;
//         VariantMatrixElementWsDTO: VariantMatrixElementWsDTO;
//         PriceRangeWsDTO: PriceRangeWsDTO;
//         SearchQueryWsDTO: SearchQueryWsDTO;
//         FacetValueWsDTO: FacetValueWsDTO;
//         UserWsDTO: UserWsDTO;
//         FeatureWsDTO: FeatureWsDTO;
//         PromotionRestrictionWsDTO: PromotionRestrictionWsDTO;
//         VariantOptionQualifierWsDTO: VariantOptionQualifierWsDTO;
//         VariantValueCategoryWsDTO: VariantValueCategoryWsDTO;
//         VariantCategoryWsDTO: VariantCategoryWsDTO;
//         AddressWsDTO: AddressWsDTO;
//         CurrencyWsDTO: CurrencyWsDTO;
//         LanguageWsDTO: LanguageWsDTO;
//         FeatureUnitWsDTO: FeatureUnitWsDTO;
//         FeatureValueWsDTO: FeatureValueWsDTO;
//         RegionWsDTO: RegionWsDTO;
//         CountryWsDTO: CountryWsDTO;
//     }

//     export interface RootObject {
//         $schema: string;
//         title: string;
//         type: string;
//         description: string;
//         properties: Properties;
//         definitions: Definitions;
//     }

// }

