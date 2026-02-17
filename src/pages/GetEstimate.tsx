import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Phone, Mail, MapPin } from "lucide-react";
import RequiredMark from "@/components/common/RequiredMark";
import { useEffect, useState } from "react";
import { toast } from "sonner";
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

const JOBBER_CLIENT_HUB_ID = "3f2be4ce-f6a2-414c-95b4-8211aaed3546";
const JOBBER_SCRIPT_SRC =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
const JOBBER_STYLE_HREF =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
const JOBBER_FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/3f2be4ce-f6a2-414c-95b4-8211aaed3546/public/work_request/embedded_work_request_form";

export default function GetEstimate() {
  const navigate = useNavigate();
  const [createClient, { isLoading }] = useCreateClientMutation();
  const [addNote] = useAddNoteMutation();

  const [isSubmitted, setIsSubmitted] = useState(false);
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
  const fieldClassName =
    "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm sm:text-base";
  const labelClassName = "mb-2 block text-sm font-semibold sm:text-base";

  useEffect(() => {
    const styleId = "jobber-work-request-style";
    const scriptId = "jobber-work-request-script";

    let linkEl = document.getElementById(styleId) as HTMLLinkElement | null;
    if (!linkEl) {
      linkEl = document.createElement("link");
      linkEl.id = styleId;
      linkEl.rel = "stylesheet";
      linkEl.href = JOBBER_STYLE_HREF;
      linkEl.media = "screen";
      document.head.appendChild(linkEl);
    }

    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = JOBBER_SCRIPT_SRC;
      script.setAttribute("clienthub_id", JOBBER_CLIENT_HUB_ID);
      script.setAttribute("form_url", JOBBER_FORM_URL);
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
      const clientId = client?.data?._id || client?._id || client?.id;

      if (!clientId) {
        throw new Error("Client created but no client id was returned");
      }

      //console.log("Client from add client", client);

      // 2️⃣ Upload note (if provided)
      if (noteValue || noteFile) {
        const fd = new FormData();
        if (noteValue) fd.append("note", noteValue);
        if (noteFile) fd.append("file", noteFile);

        await addNote({ clientId, formData: fd }).unwrap();
      }

      toast.success("Submitted successfully");
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit");
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
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl">Request Your Free Estimate</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
                </p>
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>
                    Your information is secure and will only be used to provide your estimate.
                    We never share your personal information with third parties.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {isSubmitted ? (
                  <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                    <CheckCircle className="mx-auto mb-3 h-10 w-10 text-green-600" />
                    <h3 className="text-xl font-semibold text-green-800">Estimate Request Submitted</h3>
                    <p className="mt-2 text-sm text-green-700 sm:text-base">
                      Thank you. Your request has been received, and our team will contact you soon.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleCreateClient}
                    className="space-y-6 rounded-xl border border-border bg-background p-4 sm:p-6"
                  >
                    {/* Client Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClassName}>
                          Client Name <RequiredMark />
                        </label>
                        <input
                          value={formData.clientName}
                          onChange={(e) => handleInputChange("clientName", e.target.value)}
                          className={fieldClassName}
                          required
                        />
                      </div>

                      <div>
                        <label className={labelClassName}>
                          Partner Name
                        </label>
                        <input
                          value={formData.partnerName}
                          onChange={(e) => handleInputChange("partnerName", e.target.value)}
                          className={fieldClassName}
                        />
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClassName}>
                          Phone <RequiredMark />
                        </label>
                        <input
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                          className={fieldClassName}
                          required
                        />
                      </div>

                      <div>
                        <label className={labelClassName}>
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={fieldClassName}
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-4">
                      <div>
                        <label className={labelClassName}>
                          Street Address <RequiredMark />
                        </label>
                        <input
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          className={fieldClassName}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className={labelClassName}>
                            City <RequiredMark />
                          </label>
                          <input
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            className={fieldClassName}
                            required
                          />
                        </div>
                        <div>
                          <label className={labelClassName}>
                            State <RequiredMark />
                          </label>
                          <input
                            value={formData.state}
                            onChange={(e) => handleInputChange("state", e.target.value)}
                            className={fieldClassName}
                            required
                          />
                        </div>
                        <div>
                          <label className={labelClassName}>
                            Zip Code <RequiredMark />
                          </label>
                          <input
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange("zipCode", e.target.value)}
                            className={fieldClassName}
                            required
                            inputMode="numeric"
                          />
                        </div>
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
                    <div className="flex flex-col-reverse gap-3 border-t border-border pt-4 sm:flex-row sm:justify-end">
                      <button
                        type="button"
                        onClick={() => navigate("/s/sales-rep/leads")}
                        className="w-full rounded-lg border py-2 text-sm sm:w-auto sm:min-w-[140px] sm:text-base"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full rounded-lg bg-blue-600 py-2 text-sm text-white sm:w-auto sm:min-w-[140px] sm:text-base"
                      >
                        {isLoading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>

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
                    <a href="tel:+1 (872) 666 8770" className="text-accent hover:underline">
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
