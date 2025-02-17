import {catchError} from "@tsed/core";
import {InitCmd} from "@tsed/cli";

describe("InitCmd", () => {
  describe("checkPrecondition()", () => {
    it("should throw error (platform)", () => {
      const result = catchError(() => {
        InitCmd.checkPrecondition([], {
          platform: "wrong"
        } as any);
      });
      expect(result?.message).toEqual("Invalid selected platform: wrong. Possible values: express, koa.");
    });

    it("should throw error (architecture)", () => {
      const result = catchError(() => {
        InitCmd.checkPrecondition([], {
          architecture: "wrong"
        } as any);
      });
      expect(result?.message).toEqual("Invalid selected architecture: wrong. Possible values: default, feature.");
    });

    it("should throw error (convention)", () => {
      const result = catchError(() => {
        InitCmd.checkPrecondition([], {
          convention: "wrong"
        } as any);
      });
      expect(result?.message).toEqual("Invalid selected convention: wrong. Possible values: default, angular.");
    });

    it("should not throw error (package manager)", () => {
      const result = catchError(() => {
        InitCmd.checkPrecondition(["npm"], {
          packageManager: "npm"
        } as any);
      });
      expect(result?.message).toEqual(undefined);
    });

    it("should throw error (package manager)", () => {
      const result = catchError(() => {
        InitCmd.checkPrecondition(["yarn", "npm", "pnpm"], {
          packageManager: "unknown"
        } as any);
      });
      expect(result?.message).toEqual("Invalid selected package manager: unknown. Possible values: yarn, npm, pnpm.");
    });

    it("should throw error (features)", () => {
      const result = catchError(() => {
        InitCmd.checkPrecondition(["yarn", "npm", "pnpm"], {
          packageManager: "yarn",
          features: ["wrong"]
        } as any);
      });
      expect(result?.message).toContain("Invalid selected feature: wrong. Possible values: ");
    });
  });
});
