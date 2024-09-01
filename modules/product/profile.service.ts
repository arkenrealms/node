import type { Context } from '../../types';
import type { Product, ProductUpdate } from './product.types';

export class Service {
  async getProduct({ productId }: { productId: string }, ctx: Context) {
    console.log('Product.Service.getProduct', productId);
    const product = await ctx.app.model.Product.findById(productId).lean().exec();
    if (!product) {
      throw new Error('Product not found');
    }
    return product as Product;
  }

  async addProductUpdate(
    { productId, updateData }: { productId: string; updateData: Partial<ProductUpdate> },
    ctx: Context
  ) {
    console.log('Product.Service.addProductUpdate', productId, updateData);
    const update = await ctx.app.model.ProductUpdate.create({ ...updateData, productId });
    await ctx.app.model.Product.updateOne({ _id: productId }, { $push: { productUpdates: update._id } }).exec();
    return update as ProductUpdate;
  }

  async updateProduct({ productId, data }: { productId: string; data: Partial<Product> }, ctx: Context) {
    console.log('Product.Service.updateProduct', productId, data);
    const updatedProduct = await ctx.app.model.Product.findByIdAndUpdate(productId, data, { new: true }).lean().exec();
    if (!updatedProduct) {
      throw new Error('Product update failed');
    }
    return updatedProduct as Product;
  }
}
