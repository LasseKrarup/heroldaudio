{
  description = "Herold Audio web page project";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    flake-parts.inputs.nixpkgs-lib.follows = "nixpkgs";
    nixpkgs.url = "github:NixOS/nixpkgs/64c08a7ca051951c8eae34e3e3cb1e202fe36786";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];
      perSystem =
        {
          config,
          self',
          inputs',
          pkgs,
          system,
          ...
        }:
        {
          devShells.default = pkgs.mkShell {
            nativeBuildInputs = with pkgs; [
              nodejs
              yarn
              vue-language-server
              typescript-language-server
              tailwindcss-language-server
            ];
          };
        };
    };
}
