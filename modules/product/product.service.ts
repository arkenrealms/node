import type {
  Product,
  ProductDLC,
  ProductBundle,
  ProductReview,
  RouterContext,
  Router,
  RouterInput,
  RouterOutput,
} from './product.types';

export class Service {
  async getProduct(input: RouterInput['getProduct'], ctx: RouterContext): Promise<RouterOutput['getProduct']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.getProduct', input.productId);

    const product = await ctx.app.model.Product.findById(input.productId).lean().exec();
    if (!product) throw new Error('Product not found');

    return product as Product;
  }

  async createProduct(input: RouterInput['createProduct'], ctx: RouterContext): Promise<RouterOutput['createProduct']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.createProduct', input);

    const product = await ctx.app.model.Product.create(input);
    return product as Product;
  }

  async updateProduct(input: RouterInput['updateProduct'], ctx: RouterContext): Promise<RouterOutput['updateProduct']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.updateProduct', input.productId, input.data);

    const updatedProduct = await ctx.app.model.Product.findByIdAndUpdate(input.productId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedProduct) throw new Error('Product update failed');

    return updatedProduct as Product;
  }

  async getProductDLC(input: RouterInput['getProductDLC'], ctx: RouterContext): Promise<RouterOutput['getProductDLC']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.getProductDLC', input.dlcId);

    const productDLC = await ctx.app.model.ProductDLC.findById(input.dlcId).lean().exec();
    if (!productDLC) throw new Error('ProductDLC not found');

    return productDLC as ProductDLC;
  }

  async createProductDLC(
    input: RouterInput['createProductDLC'],
    ctx: RouterContext
  ): Promise<RouterOutput['createProductDLC']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.createProductDLC', input);

    const productDLC = await ctx.app.model.ProductDLC.create(input);
    return productDLC as ProductDLC;
  }

  async updateProductDLC(
    input: RouterInput['updateProductDLC'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateProductDLC']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.updateProductDLC', input.dlcId, input.data);

    const updatedProductDLC = await ctx.app.model.ProductDLC.findByIdAndUpdate(input.dlcId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedProductDLC) throw new Error('ProductDLC update failed');

    return updatedProductDLC as ProductDLC;
  }

  async getProductBundle(
    input: RouterInput['getProductBundle'],
    ctx: RouterContext
  ): Promise<RouterOutput['getProductBundle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.getProductBundle', input.bundleId);

    const productBundle = await ctx.app.model.ProductBundle.findById(input.bundleId).lean().exec();
    if (!productBundle) throw new Error('ProductBundle not found');

    return productBundle as ProductBundle;
  }

  async createProductBundle(
    input: RouterInput['createProductBundle'],
    ctx: RouterContext
  ): Promise<RouterOutput['createProductBundle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.createProductBundle', input);

    const productBundle = await ctx.app.model.ProductBundle.create(input);
    return productBundle as ProductBundle;
  }

  async updateProductBundle(
    input: RouterInput['updateProductBundle'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateProductBundle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.updateProductBundle', input.bundleId, input.data);

    const updatedProductBundle = await ctx.app.model.ProductBundle.findByIdAndUpdate(input.bundleId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedProductBundle) throw new Error('ProductBundle update failed');

    return updatedProductBundle as ProductBundle;
  }

  async getProductReview(
    input: RouterInput['getProductReview'],
    ctx: RouterContext
  ): Promise<RouterOutput['getProductReview']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.getProductReview', input.reviewId);

    const productReview = await ctx.app.model.ProductReview.findById(input.reviewId).lean().exec();
    if (!productReview) throw new Error('ProductReview not found');

    return productReview as ProductReview;
  }

  async createProductReview(
    input: RouterInput['createProductReview'],
    ctx: RouterContext
  ): Promise<RouterOutput['createProductReview']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.createProductReview', input);

    const productReview = await ctx.app.model.ProductReview.create(input);
    return productReview as ProductReview;
  }

  async updateProductReview(
    input: RouterInput['updateProductReview'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateProductReview']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Product.Service.updateProductReview', input.reviewId, input.data);

    const updatedProductReview = await ctx.app.model.ProductReview.findByIdAndUpdate(input.reviewId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedProductReview) throw new Error('ProductReview update failed');

    return updatedProductReview as ProductReview;
  }
}
