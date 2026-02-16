import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Phone, Mail, MapPin } from "lucide-react";
import RequiredMark from "@/components/common/RequiredMark";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ClientNote from "@/components/common/ClientNote";
import { useCreateClientMutation, useAddNoteMutation } from "@/redux/api/clientApi";

const benefits = [
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "No hidden costs or surprise charges. You'll know exactly what you're paying for."
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all estimate requests within 24 hours, often much sooner."
  },
  {
    icon: Shield,
    title: "No Obligation",
    description: "Our free estimates come with zero pressure. Take your time to decide."
  }
];


export default function GetEstimate() {
  const navigate = useNavigate();
  const [createClient, { isLoading }] = useCreateClientMutation();
  const [addNote] = useAddNoteMutation();

  const [note, setNote] = useState("");
  const [noteFile, setNoteFile] = useState(null);
  const [formData, setFormData] = useState({
    clientName: "",
    partnerName: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    state: "Illinois",
    zipCode: "",
    leadSource: "",
    rating: 0,
  });

  const leadSources = ["Door to Door", "Inbound", "Social"];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateClient = async (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }

    const noteValue = note.trim();
    if (!noteValue && noteFile) {
      toast.error("Add a note for the attachment.");
      return;
    }

    try {
      // 1️⃣ Create client
      const client = await createClient(formData).unwrap();
      const clientId = client.data._id;

      //console.log("Client from add client", client);

      // 2️⃣ Upload note (if provided)
      if (noteValue || noteFile) {
        const fd = new FormData();
        if (noteValue) fd.append("note", noteValue);
        if (noteFile) fd.append("file", noteFile);

        await addNote({ clientId, formData: fd }).unwrap();
      }

      toast.success("Client added successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create client");
    }
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Painting Estimate
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional, detailed estimates for all your painting needs.
              Licensed, bonded, and insured for your peace of mind.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl">Request Your Free Estimate</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
                </p>
              </CardHeader>
              <CardContent>
                {/* Jobber Form Embed */}
                <div id="3f2be4ce-f6a2-414c-95b4-8211aaed3546"></div>
                <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
                <div dangerouslySetInnerHTML={{
                  __html: `<script src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" clienthub_id="3f2be4ce-f6a2-414c-95b4-8211aaed3546" form_url="https://clienthub.getjobber.com/client_hubs/3f2be4ce-f6a2-414c-95b4-8211aaed3546/public/work_request/embedded_work_request_form"></script>`
                }} />
              </CardContent>
            </Card>

            {/* Privacy Note */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>
                Your information is secure and will only be used to provide your estimate.
                We never share your personal information with third parties.
              </p>
            </div>
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">
                Add Lead
              </h1>

              <form
                onSubmit={handleCreateClient}
                className="space-y-6 bg-white section-pad border rounded-lg"
              >
                {/* Client Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm sm:text-base font-semibold mb-2">
                      Client Name <RequiredMark />
                    </label>
                    <input
                      value={formData.clientName}
                      onChange={(e) => handleInputChange("clientName", e.target.value)}
                      className="w-full border px-3 py-2 rounded-lg text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-semibold mb-2">
                      Partner Name
                    </label>
                    <input
                      value={formData.partnerName}
                      onChange={(e) => handleInputChange("partnerName", e.target.value)}
                      className="w-full border px-3 py-2 rounded-lg text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm sm:text-base font-semibold mb-2">
                      Phone <RequiredMark />
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      className="w-full border px-3 py-2 rounded-lg text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full border px-3 py-2 rounded-lg text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm sm:text-base font-semibold mb-2">
                      Street Address <RequiredMark />
                    </label>
                    <input
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="w-full border px-3 py-2 rounded-lg text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm sm:text-base font-semibold mb-2">
                        City <RequiredMark />
                      </label>
                      <input
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="w-full border px-3 py-2 rounded-lg text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm sm:text-base font-semibold mb-2">
                        State <RequiredMark />
                      </label>
                      <input
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        className="w-full border px-3 py-2 rounded-lg text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm sm:text-base font-semibold mb-2">
                        Zip Code <RequiredMark />
                      </label>
                      <input
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        className="w-full border px-3 py-2 rounded-lg text-sm sm:text-base"
                        required
                        inputMode="numeric"
                      />
                    </div>
                  </div>
                </div>

                {/* Lead Source */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold mb-2">
                    Lead Source <RequiredMark />
                  </label>
                  <select
                    value={formData.leadSource}
                    onChange={(e) => handleInputChange("leadSource", e.target.value)}
                    className="w-full border px-3 py-2 rounded-lg text-sm sm:text-base"
                    required
                  >
                    {leadSources.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Lead Rating */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold mb-2">
                    Lead Rating
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleInputChange("rating", star)}
                        className="text-xl sm:text-2xl"
                      >
                        {star <= formData.rating ? "★" : "☆"}
                      </button>
                    ))}
                    <span className="text-sm text-gray-600">{formData.rating}/5</span>
                  </div>
                </div>

                {/* Notes */}
                <ClientNote
                  note={note}
                  file={noteFile}
                  onNoteChange={setNote}
                  onFileChange={setNoteFile}
                />

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => navigate("/s/sales-rep/leads")}
                    className="w-full sm:flex-1 border py-2 rounded-lg text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm sm:text-base"
                  >
                    {isLoading ? "Saving..." : "Save Client"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Why Choose TTM Painting?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <benefit.icon className="h-6 w-6 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Contact Us Directly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <div className="font-medium">Call for Immediate Service</div>
                    <a href="tel:6302779414" className="text-accent hover:underline">
                      +1 (872) 666 8770
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <a href="mailto:info@ttmpainting.com" className="text-accent hover:underline">
                      info@ttmpainting.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <div className="font-medium">Service Area</div>
                    <div className="text-sm text-muted-foreground">
                      Rock Island to Chicago suburbs, Galena to Champaign & all areas in between
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <p className="text-sm text-muted-foreground">
                    <strong>Emergency Services:</strong> Available for urgent commercial projects and weather-related repairs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}