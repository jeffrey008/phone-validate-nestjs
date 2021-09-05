import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  async validateNumber(query): any {
    if (!query.number || !parseInt(query.number)) {
      throw new HttpException(
        'Missing or invalid query param: number',
        HttpStatus.BAD_REQUEST,
      );
    }

    const response = await this.httpService
      .get(
        `http://apilayer.net/api/validate?access_key=${
          process.env.NUMVERIFY_ACCESS_KEY
        }&number=${query.number}&country_code=${
          query.countryCode || ''
        }&format = 1`,
      )
      .toPromise();

    return response.data;
  }
}
