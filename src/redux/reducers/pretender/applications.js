import { getApplicationsSuccess } from './mocks';

export default function () {
    this.get('/applications', (request) => {
        return [
            200,
            { 'Content-Type': 'application/json' },
            JSON.stringify(getApplicationsSuccess)
        ];
    });

    this.get('/applications/:open', (request) => {
        const cohortsOpen = getApplicationsSuccess.cohort_apps
            .filter(cohortItem => cohortItem.dateOpen > new Date())
        if (cohortsOpen){
            return [
                200,
                { 'Content-Type': 'application/json' },
                JSON.stringify({ cohort_apps: cohortsOpen }),
            ];
        }
        return [
            404,
            { 'Content-Type': 'application/json' }
        ];
    });

    this.get('/applications/:cohort_id', async (request) => {
        const cohort = getApplicationsSuccess.cohort_apps
            .filter(cohortItem => cohortItem.id === request.params.cohort_id)
        if (cohort){
            return [
                200,
                { 'Content-Type': 'application/json' },
                JSON.stringify({cohort}),
            ];
        }
        return [
            404,
            { 'Content-Type': 'application/json' }
        ];
    });

    this.post('/applications/:cohort_id', (request) => {
        const cohort = getApplicationsSuccess.cohort_apps
            .filter(cohortItem => cohortItem.id === request.params.cohort_id)
        if (cohort){
            return [
                201,
                { 'Content-Type': 'application/json' },
            ];
        }
        return [
            404,
            { 'Content-Type': 'application/json' }
        ];
    });

    return [
      404,
      { 'Content-Type': 'application/json' }
    ];
}
