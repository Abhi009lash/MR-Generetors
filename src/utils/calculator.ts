export interface LoadCalculationParams {
  connectedLoadKw: number;
  powerFactor?: number;
  diversityFactor?: number;
  futureMarginPercentage?: number;
}

export function calculateRequiredKva({
  connectedLoadKw,
  powerFactor = 0.8,
  diversityFactor = 0.75,
  futureMarginPercentage = 20,
}: LoadCalculationParams): number {
  if (connectedLoadKw <= 0) return 0;
  const runningKw = connectedLoadKw * diversityFactor;
  const runningKva = runningKw / powerFactor;
  const recommendedKva = runningKva * (1 + futureMarginPercentage / 100);
  return Math.ceil(recommendedKva);
}

export function getNearestStandardKva(calcKva: number): number {
  const standardRatings = [
    5, 7.5, 10, 15, 20, 25, 30, 40, 50, 57, 62.5, 82.5, 100, 125,
    140, 160, 200, 250, 320, 380, 500, 600, 750, 1000, 1250, 1500, 2000
  ];
  const match = standardRatings.find((r) => r >= calcKva);
  return match ?? 2000;
}
