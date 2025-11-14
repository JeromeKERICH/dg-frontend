import React, { useEffect, useState } from "react";
import api, { fetchProducts, createProduct, updateProduct, deleteProduct } from "../../services/api";
import { Plus, Edit2, Trash2, X, Save, Package } from 'lucide-react';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ 
    name: "", 
    category: "", 
    description: "", 
    price: "", 
    stock: 0, 
    ingredients: [], 
    benefits: [] 
  });

  const token = localStorage.getItem("dg_token");

  const load = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      alert("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    load(); 
  }, []);

  const resetForm = () => {
    setForm({ 
      name: "", 
      category: "", 
      description: "", 
      price: "", 
      stock: 0, 
      ingredients: [], 
      benefits: [] 
    });
    setEditing(null);
    setShowForm(false);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("category", form.category);
      fd.append("description", form.description);
      fd.append("price", form.price);
      fd.append("stock", form.stock);
      fd.append("ingredients", JSON.stringify(form.ingredients));
      fd.append("benefits", JSON.stringify(form.benefits));
      
      const file = document.getElementById("fileInput")?.files?.[0];
      if (file) fd.append("image", file);

      await createProduct(fd, token);
      alert("Product created successfully");
      resetForm();
      load();
    } catch (err) {
      alert("Create failed");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("category", form.category);
      fd.append("description", form.description);
      fd.append("price", form.price);
      fd.append("stock", form.stock);
      fd.append("ingredients", JSON.stringify(form.ingredients));
      fd.append("benefits", JSON.stringify(form.benefits));
      
      const file = document.getElementById("fileEdit")?.files?.[0];
      if (file) fd.append("image", file);

      await updateProduct(editing._id, fd, token);
      alert("Product updated successfully");
      resetForm();
      load();
    } catch (err) {
      alert("Update failed");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteProduct(id, token);
      load();
    } catch (err) { 
      alert("Delete failed"); 
    }
  };

  const startEdit = (product) => {
    setEditing(product);
    setForm({
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
      stock: product.stock,
      ingredients: product.ingredients || [],
      benefits: product.benefits || []
    });
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-gray-900 mb-2">
              Product <span className="text-amber-600">Dashboard</span>
            </h1>
            <p className="text-gray-600">Manage your wellness product inventory</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Product
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-amber-600 mb-2">{products.length}</div>
            <div className="text-gray-600">Total Products</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-amber-600 mb-2">
              {Array.from(new Set(products.map(p => p.category))).length}
            </div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-amber-600 mb-2">
              ${products.reduce((sum, p) => sum + (p.price || 0), 0).toFixed(2)}
            </div>
            <div className="text-gray-600">Total Value</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-amber-600 mb-2">
              {products.reduce((sum, p) => sum + (p.stock || 0), 0)}
            </div>
            <div className="text-gray-600">Total Stock</div>
          </div>
        </div>

        {/* Product Form */}
        {(showForm || editing) && (
          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-medium text-gray-900 flex items-center">
                <Package className="w-5 h-5 mr-2 text-amber-600" />
                {editing ? 'Edit Product' : 'Add New Product'}
              </h3>
              <button
                onClick={resetForm}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={editing ? handleUpdate : handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  placeholder="Enter product name"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <input
                  placeholder="Enter category"
                  value={form.category}
                  onChange={(e) => setForm({...form, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (KES)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={form.price}
                  onChange={(e) => setForm({...form, price: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
                <input
                  type="number"
                  placeholder="0"
                  value={form.stock}
                  onChange={(e) => setForm({...form, stock: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  placeholder="Enter product description"
                  value={form.description}
                  onChange={(e) => setForm({...form, description: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Image
                </label>
                <input
                  id={editing ? "fileEdit" : "fileInput"}
                  type="file"
                  accept="image/*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                />
              </div>
              
              <div className="md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <Save className="w-5 h-5 mr-2" />
                  {editing ? 'Update Product' : 'Create Product'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products List */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Products</h3>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">No products found</p>
              <button
                onClick={() => setShowForm(true)}
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                Add your first product
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {products.map(product => (
                <div key={product._id} className="p-6 flex items-start space-x-4 hover:bg-gray-50 transition-colors duration-200">
                  <img 
                    src={product.imageUrl || "/placeholder.png"} 
                    alt={product.name} 
                    className="h-16 w-16 object-cover rounded-lg flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{product.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{product.category}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-amber-600 font-semibold">${product.price?.toFixed(2)}</span>
                      <span className="text-gray-500 text-sm">Stock: {product.stock}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => startEdit(product)}
                      className="p-2 text-gray-400 hover:text-amber-600 transition-colors duration-200"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}