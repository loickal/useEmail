import { describe, expect, it, vi } from "vitest";
import { UsesendService } from "../src/services/usesend";

describe("UsesendService", () => {
  it("should send an email", async () => {
    const mockApiToken = "test_api_token";
    const usesendService = new UsesendService(mockApiToken, "https://app.usesend.com/api/");

    vi.mock("ofetch", () => ({
      ofetch: vi.fn().mockResolvedValue({ id: "mock_email_id" }),
    }));

    const response = await usesendService.send({
      from: "fayaz@test.com",
      to: "fayaz@test.com",
      subject: "Test",
      text: "Test",
    });

    expect(response).toBeDefined();
  });
});
