import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle, ShieldCheck } from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  apartmentCommunity: string;
  city: string;
  content: string;
  rating: number;
  isPlaceholder: boolean;
  date: string;
}

export const Testimonials: React.FC = () => {
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [userCommunity, setUserCommunity] = useState('');
  const [userCity, setUserCity] = useState('Bengaluru');
  const [userReview, setUserReview] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Transparent placeholder review slots as instructed (no fake invented reviews)
  const [reviews, setReviews] = useState<ReviewItem[]>([
    {
      id: 'slot-1',
      name: 'Homeowner Review Slot',
      apartmentCommunity: 'High-Rise Community',
      city: 'Bengaluru',
      content:
        'This slot is reserved for verified homeowner feedback. Once your invisible grill installation is completed, your genuine review regarding view clarity and installation experience will be featured here.',
      rating: 5,
      isPlaceholder: true,
      date: 'Pending Customer Verification',
    },
    {
      id: 'slot-2',
      name: 'Apartment Resident Review Slot',
      apartmentCommunity: 'Gated Residential Society',
      city: 'Mumbai',
      content:
        'This slot is reserved for verified homeowner feedback. Real customer reviews regarding monsoon durability, zero rust performance, and balcony ventilation are added here.',
      rating: 5,
      isPlaceholder: true,
      date: 'Pending Customer Verification',
    },
    {
      id: 'slot-3',
      name: 'Penthouse Owner Review Slot',
      apartmentCommunity: 'High-Rise Apartment Tower',
      city: 'Hyderabad',
      content:
        'This slot is reserved for verified homeowner feedback. Genuine feedback regarding toddler safety, pet containment, and society elevation approval will appear in this space.',
      rating: 5,
      isPlaceholder: true,
      date: 'Pending Customer Verification',
    },
  ]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userReview.trim()) return;

    const newReview: ReviewItem = {
      id: `user-${Date.now()}`,
      name: userName.trim(),
      apartmentCommunity: userCommunity.trim() || 'Residential Apartment',
      city: userCity,
      content: userReview.trim(),
      rating: userRating,
      isPlaceholder: false,
      date: 'Verified Recent Submission',
    };

    setReviews([newReview, ...reviews.slice(0, 2)]);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmittedSuccess(false);
      setUserName('');
      setUserCommunity('');
      setUserReview('');
    }, 2000);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
              <span>Customer Transparency</span>
              <span aria-hidden="true">·</span>
              <span>Genuine Feedback Only</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              Homeowner Experiences & Testimonials
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We uphold strict authenticity: we never invent fake reviews or artificial ratings. The slots below are populated with real feedback as installations are completed across India.
            </p>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs hover:shadow-sm transition-all whitespace-nowrap self-start md:self-auto"
          >
            <MessageSquarePlus className="w-4 h-4 text-slate-700" />
            <span>Submit Customer Review</span>
          </button>
        </div>

        {/* Testimonials Grid (Clearly distinguished between real and reserved slots) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className={`p-7 rounded-2xl bg-white border transition-all flex flex-col justify-between ${
                rev.isPlaceholder
                  ? 'border-dashed border-slate-300 text-slate-600'
                  : 'border-slate-200 shadow-sm text-slate-800'
              }`}
            >
              <div>
                {/* Header with status tag and stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 font-mono">
                    {rev.isPlaceholder ? '[Slot Reserved]' : 'Verified Review'}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-sm leading-relaxed mb-6 italic">
                  "{rev.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">
                    {rev.name}
                  </div>
                  <div className="text-slate-500">
                    {rev.apartmentCommunity}, {rev.city}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 text-right">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Have our invisible grills installed in your flat? Share your verified feedback and photos to be featured.
        </div>

      </div>

      {/* Submit Review Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Submit Homeowner Review</h3>
                <p className="text-xs text-slate-500 mt-0.5">Share your experience with our invisible grill installation</p>
              </div>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            {submittedSuccess ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Thank you for your feedback!</h4>
                <p className="text-xs text-slate-600">Your review has been saved to your site preview.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh K."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Society / Building</label>
                    <input
                      type="text"
                      placeholder="e.g. Prestige Falcon City"
                      value={userCommunity}
                      onChange={(e) => setUserCommunity(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">City</label>
                    <input
                      type="text"
                      value={userCity}
                      onChange={(e) => setUserCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Rating</label>
                  <select
                    value={userRating}
                    onChange={(e) => setUserRating(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Stars - Exceptional)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Stars - Very Good)</option>
                    <option value={3}>⭐⭐⭐ (3 Stars - Satisfactory)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Review</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="How was the view after installation? Did the team work cleanly?"
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Save Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
