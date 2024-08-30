// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { AirQuality } from '../wk2/air-quality.js';
import { CurrentWeatherData } from '../wk2/current-weather-data.js';
import { DailyForecastData } from '../wk2/daily-forecast-data.js';
import { HistoricalComparison } from '../wk2/historical-comparison.js';
import { HourlyForecastData } from '../wk2/hourly-forecast-data.js';
import { News } from '../wk2/news.js';
import { NextHourForecastData } from '../wk2/next-hour-forecast-data.js';
import { WeatherAlertCollectionData } from '../wk2/weather-alert-collection-data.js';
import { WeatherChanges } from '../wk2/weather-changes.js';


export class Weather {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Weather {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsWeather(bb:flatbuffers.ByteBuffer, obj?:Weather):Weather {
  return (obj || new Weather()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsWeather(bb:flatbuffers.ByteBuffer, obj?:Weather):Weather {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Weather()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

airQuality(obj?:AirQuality):AirQuality|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new AirQuality()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

currentWeather(obj?:CurrentWeatherData):CurrentWeatherData|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new CurrentWeatherData()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

forecastDaily(obj?:DailyForecastData):DailyForecastData|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new DailyForecastData()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

forecastHourly(obj?:HourlyForecastData):HourlyForecastData|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new HourlyForecastData()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

forecastNextHour(obj?:NextHourForecastData):NextHourForecastData|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new NextHourForecastData()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

news(obj?:News):News|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new News()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

weatherAlerts(obj?:WeatherAlertCollectionData):WeatherAlertCollectionData|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new WeatherAlertCollectionData()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

weatherChanges(obj?:WeatherChanges):WeatherChanges|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new WeatherChanges()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

historicalComparisons(obj?:HistoricalComparison):HistoricalComparison|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new HistoricalComparison()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startWeather(builder:flatbuffers.Builder) {
  builder.startObject(9);
}

static addAirQuality(builder:flatbuffers.Builder, airQualityOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, airQualityOffset, 0);
}

static addCurrentWeather(builder:flatbuffers.Builder, currentWeatherOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, currentWeatherOffset, 0);
}

static addForecastDaily(builder:flatbuffers.Builder, forecastDailyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, forecastDailyOffset, 0);
}

static addForecastHourly(builder:flatbuffers.Builder, forecastHourlyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, forecastHourlyOffset, 0);
}

static addForecastNextHour(builder:flatbuffers.Builder, forecastNextHourOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, forecastNextHourOffset, 0);
}

static addNews(builder:flatbuffers.Builder, newsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, newsOffset, 0);
}

static addWeatherAlerts(builder:flatbuffers.Builder, weatherAlertsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, weatherAlertsOffset, 0);
}

static addWeatherChanges(builder:flatbuffers.Builder, weatherChangesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, weatherChangesOffset, 0);
}

static addHistoricalComparisons(builder:flatbuffers.Builder, historicalComparisonsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, historicalComparisonsOffset, 0);
}

static endWeather(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishWeatherBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedWeatherBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

}
