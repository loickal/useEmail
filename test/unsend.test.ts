import { describe, expect, it, vi } from "vitest";
import { UnsendService } from "../src/services/unsend";

describe("UnsendService", () => {
  it("should send an email", async () => {
    const mockApiToken = "test_api_token";
    const unsendService = new UnsendService(mockApiToken, "https://app.unsend.dev/api/");

    vi.mock("ofetch", () => ({
      ofetch: vi.fn().mockResolvedValue({ id: "mock_email_id" }),
    }));

    const response = await unsendService.send({
      from: "fayaz@test.com",
      to: "fayaz@test.com",
      subject: "Test",
      text: "Test",
    });

    expect(response).toBeDefined();
  });
});
